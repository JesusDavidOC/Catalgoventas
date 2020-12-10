import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Login.vue')
        }
    },
    {
        path: '/Registro',
        name: 'Registro',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Registro.vue')
        },
    },
    {
        path: '/Principal',
        name: 'Principal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Principal.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Carrito',
        name: 'Carrito',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/Carrito.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Añadir',
        name: 'Añadir',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/AñadirProducto.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Perfil',
        name: 'Perfil',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/Perfil.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Tiendas',
        name: 'Tiendas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/Tiendas.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/AñadirTienda',
        name: 'AñadirTienda',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/AñadirTienda.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/ProductosUser',
        name: 'ProductosUser',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/ProductosUser.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Index',
        name: 'Index',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/Index.vue')
        },
        meta: {
            isProtected: true
        }
    },
    {
        path: '/Editar',
        name: 'Editar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/EditarDatos.vue')
        },
        meta: {
            isProtected: true
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const isProtected = to.matched.some(item => item.meta.isProtected)
    if (isProtected && store.state.token == null) {
        next('/Login');
    } else {
        next()
    }
})
export default router