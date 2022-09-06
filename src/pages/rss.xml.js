import rss from '@astrojs/rss';
import { SITE } from '../config'

const allPosts = import.meta.glob('./**/*.md', { eager: true })
// @ts-ignore
const sortedPosts = Object.values(allPosts).sort((a, b) => new Date(b.date) - new Date(a.date));

export const get = () => rss({
    // `<title>` field in output xml
    title: `${SITE.name} | Blog`,
    // `<description>` field in output xml
    description: SITE.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: sortedPosts.map(item => ({
        // @ts-ignore
        title: item.frontmatter.title,
        // @ts-ignore
        description: item.frontmatter.description,
        // @ts-ignore
        link: item.url,
        // @ts-ignore
        pubDate: item.frontmatter.date,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
});
