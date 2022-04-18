import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1efae515 = () => interopDefault(import('../pages/about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _1f08fc96 = () => interopDefault(import('../pages/about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _1f171417 = () => interopDefault(import('../pages/about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _010675c9 = () => interopDefault(import('../pages/career.vue' /* webpackChunkName: "pages/career" */))
const _42e6b946 = () => interopDefault(import('../pages/contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _1711733c = () => interopDefault(import('../pages/contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _81b9b88e = () => interopDefault(import('../pages/home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _3481a024 = () => interopDefault(import('../pages/home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _1e7e4e8f = () => interopDefault(import('../pages/home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _1c7fe080 = () => interopDefault(import('../pages/home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _6ce7b89d = () => interopDefault(import('../pages/home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _23a259a2 = () => interopDefault(import('../pages/home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _a60cea66 = () => interopDefault(import('../pages/home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _54a50a2b = () => interopDefault(import('../pages/home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _7582b26d = () => interopDefault(import('../pages/home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _46d6c7f6 = () => interopDefault(import('../pages/home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _38747acb = () => interopDefault(import('../pages/home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _25431756 = () => interopDefault(import('../pages/home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _4b755c98 = () => interopDefault(import('../pages/home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _7edff4e7 = () => interopDefault(import('../pages/home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _d7f1e8b8 = () => interopDefault(import('../pages/home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _05245919 = () => interopDefault(import('../pages/home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _079d0af9 = () => interopDefault(import('../pages/home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _14d732dc = () => interopDefault(import('../pages/home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _c8060dd8 = () => interopDefault(import('../pages/home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _6776ddee = () => interopDefault(import('../pages/home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _5a86d74d = () => interopDefault(import('../pages/home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _2fd3ecd6 = () => interopDefault(import('../pages/home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _411344b0 = () => interopDefault(import('../pages/home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _49b15f52 = () => interopDefault(import('../pages/home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _ee4bd0ce = () => interopDefault(import('../pages/home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _801a4748 = () => interopDefault(import('../pages/home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _22d531b3 = () => interopDefault(import('../pages/home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _64d4c0a8 = () => interopDefault(import('../pages/pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _221ec9f7 = () => interopDefault(import('../pages/pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _77d4fe2e = () => interopDefault(import('../pages/services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _03c1529c = () => interopDefault(import('../pages/services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _b55b8c9a = () => interopDefault(import('../pages/services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _2f10c6ae = () => interopDefault(import('../pages/team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _2ef497ac = () => interopDefault(import('../pages/team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _13a738bb = () => interopDefault(import('../pages/team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _456ba418 = () => interopDefault(import('../pages/blog/blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _70a8572e = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _9977e098 = () => interopDefault(import('../pages/blog/blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _4a8116f4 = () => interopDefault(import('../pages/blog/blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _f3e7ebfa = () => interopDefault(import('../pages/blog/blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _42cb8fa3 = () => interopDefault(import('../pages/blog/blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _6cb44c83 = () => interopDefault(import('../pages/blog/blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _f4f54b10 = () => interopDefault(import('../pages/blog/blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _27fcf02d = () => interopDefault(import('../pages/blog/blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _4a2e3540 = () => interopDefault(import('../pages/blog/blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _bcce016a = () => interopDefault(import('../pages/blog/blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _4aa272d6 = () => interopDefault(import('../pages/blog/blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _febcf50c = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _7981a822 = () => interopDefault(import('../pages/element/brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _f75e40dc = () => interopDefault(import('../pages/element/call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _8d71d0c0 = () => interopDefault(import('../pages/element/carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _45b26f8f = () => interopDefault(import('../pages/element/contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _3996a938 = () => interopDefault(import('../pages/element/dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _d35d89f2 = () => interopDefault(import('../pages/element/flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _f09aebce = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _ad7161ba = () => interopDefault(import('../pages/element/icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _ff56fa38 = () => interopDefault(import('../pages/element/instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _07351247 = () => interopDefault(import('../pages/element/lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _98099b92 = () => interopDefault(import('../pages/element/message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _296eba14 = () => interopDefault(import('../pages/element/pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _24876672 = () => interopDefault(import('../pages/element/tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _c1ef16ca = () => interopDefault(import('../pages/element/team.vue' /* webpackChunkName: "pages/element/team" */))
const _162262d1 = () => interopDefault(import('../pages/element/testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _6ede0ffe = () => interopDefault(import('../pages/portfolio/portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _b834570a = () => interopDefault(import('../pages/portfolio/portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _7e28525a = () => interopDefault(import('../pages/portfolio/portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _0c108e07 = () => interopDefault(import('../pages/portfolio/portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _75a9d4ca = () => interopDefault(import('../pages/portfolio/portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _24d0b026 = () => interopDefault(import('../pages/portfolio/portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _b80aa18c = () => interopDefault(import('../pages/portfolio/portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _73282318 = () => interopDefault(import('../pages/portfolio/portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _71f24e55 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _720065d6 = () => interopDefault(import('../pages/portfolio/portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _2dd6fa1a = () => interopDefault(import('../pages/portfolio/portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _12cecef6 = () => interopDefault(import('../pages/portfolio/portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _bc4a0dea = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _d115761a = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _609fec28 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6a78ffc8 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
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
    path: "/about-us-01",
    component: _1efae515,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _1f08fc96,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _1f171417,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _010675c9,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _42e6b946,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _1711733c,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _81b9b88e,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _3481a024,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _1e7e4e8f,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _1c7fe080,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _6ce7b89d,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _23a259a2,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _a60cea66,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _54a50a2b,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _7582b26d,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _46d6c7f6,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _38747acb,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _25431756,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _4b755c98,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _7edff4e7,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _d7f1e8b8,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _05245919,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _079d0af9,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _14d732dc,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _c8060dd8,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _6776ddee,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _5a86d74d,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _2fd3ecd6,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _411344b0,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _49b15f52,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _ee4bd0ce,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _801a4748,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _22d531b3,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _64d4c0a8,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _221ec9f7,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _77d4fe2e,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _03c1529c,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _b55b8c9a,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _2f10c6ae,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _2ef497ac,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _13a738bb,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _456ba418,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _70a8572e,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _9977e098,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _4a8116f4,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _f3e7ebfa,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _42cb8fa3,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _6cb44c83,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _f4f54b10,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _27fcf02d,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _4a2e3540,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _bcce016a,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _4aa272d6,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _febcf50c,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _7981a822,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _f75e40dc,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _8d71d0c0,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _45b26f8f,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _3996a938,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _d35d89f2,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _f09aebce,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _ad7161ba,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _ff56fa38,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _07351247,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _98099b92,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _296eba14,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _24876672,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _c1ef16ca,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _162262d1,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _6ede0ffe,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _b834570a,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _7e28525a,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _0c108e07,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _75a9d4ca,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _24d0b026,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _b80aa18c,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _73282318,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _71f24e55,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _720065d6,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _2dd6fa1a,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _12cecef6,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _bc4a0dea,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _d115761a,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _609fec28,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _6a78ffc8,
    name: "portfolio-slug"
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
