import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CAS from './views/CAS.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'cas',
            component: CAS
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/*',
            name: 'error',
            component: Error
        }
    ]
})

