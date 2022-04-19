import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _280bfa92 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3c2f0f68 = () => interopDefault(import('../pages/datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _c6079dc0 = () => interopDefault(import('../pages/galerie.vue' /* webpackChunkName: "pages/galerie" */))
const _27ce63fc = () => interopDefault(import('../pages/impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _0c40cd65 = () => interopDefault(import('../pages/kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _35bf8dde = () => interopDefault(import('../pages/leistungen.vue' /* webpackChunkName: "pages/leistungen" */))
const _47c3d557 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _280bfa92,
    name: "about"
  }, {
    path: "/datenschutz",
    component: _3c2f0f68,
    name: "datenschutz"
  }, {
    path: "/galerie",
    component: _c6079dc0,
    name: "galerie"
  }, {
    path: "/impressum",
    component: _27ce63fc,
    name: "impressum"
  }, {
    path: "/kontakt",
    component: _0c40cd65,
    name: "kontakt"
  }, {
    path: "/leistungen",
    component: _35bf8dde,
    name: "leistungen"
  }, {
    path: "/",
    component: _47c3d557,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
