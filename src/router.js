import Vue from 'vue'
import Router from 'vue-router'
import store from "./store";

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: () => import('./views/Layout.vue'),
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('./views/About.vue')
                },
                {
                    path: '/jyd',
                    name: 'jyd',
                    component: () => import('./views/Jyd.vue')
                },
                {
                    path: '/logistics',
                    name: 'logistics',
                    component: () => import('./views/Logistics.vue'),
                    beforeEnter: (to, from, next) => {
                        let user = store.getters.user;
                        if (user && user.token) {
                            next({path: '/product'})
                        } else {
                            next()
                        }
                    }
                },
                {
                    path: '/product',
                    name: 'product',
                    component: () => import('./views/Product.vue'),
                    beforeEnter: (to, from, next) => {
                        let user = store.getters.user;
                        if (user && user.token) {
                            next()
                        } else {
                            next({path: '/logistics'})
                        }
                    },
                    children: [
                        {
                            path: 'list',
                            component: () => import('./views/product/list.vue'),
                            name: 'productList'
                        },
                        {
                            path: 'supplier',
                            component: () => import('./views/product/supplier.vue'),
                            name: 'supplierList'
                        }
                    ]
                },

                {
                    path: '/league',
                    name: 'league',
                    component: () => import('./views/League.vue')
                },
                {
                    path: '/solution',
                    name: 'solution',
                    component: () => import('./views/Solution.vue')
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
