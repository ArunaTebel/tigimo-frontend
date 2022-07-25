import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'root',
        component: () => import('./components/layouts/TigimoHomeComponent.vue')
    },
    {
        path: '/authCallback',
        name: 'auth-callback',
        component: () => import('./components/layouts/TigimoAuthCallbackComponent.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/layouts/TigimoHomeComponent.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/layouts/TigimoDashboardComponent.vue')
    },
    {
        path: '/channels/:channelId',
        name: 'channel-postings',
        component: () => import('./components/layouts/TigimoChannelPostingsComponent.vue')
    },
    {
        path: '/add-channel',
        name: 'add-channel',
        component: () => import('./components/layouts/TigimoAddChannelComponent.vue')
    },
    {
        path: '/add-posting',
        name: 'add-posting',
        component: () => import('./components/layouts/TigimoAddPostingComponent.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router