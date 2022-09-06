import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    about: {
        path: '/about',
        title: 'about'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
}

export const SITE = {
    // Your site's detail?
    name: 'Knight Times News',
    title: 'Knight Times',
    description: 'Your School News Source',
    url: 'https://res.cloudinary.com/cduoshop/image/upload/v1662465148/1_UTE7D38lvzu9LLe7cmFWRg_gtcmgf.jpg',
    listDrafts: false
    // description ?
}

export const PAGE_SIZE = 8
