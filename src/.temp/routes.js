export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/Users/lincolixavier/Documents/Projetos/izienglish/src/pages/Index.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/lincolixavier/Documents/Projetos/izienglish/node_modules/gridsome/app/pages/404.vue"),
    meta: { isIndex: false }
  },
  {
    name: "tag",
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "component--tag" */ "/Users/lincolixavier/Documents/Projetos/izienglish/src/templates/Tag.vue")
  },
  {
    name: "post",
    path: "/:slug",
    component: () => import(/* webpackChunkName: "component--post" */ "/Users/lincolixavier/Documents/Projetos/izienglish/src/templates/Post.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/lincolixavier/Documents/Projetos/izienglish/node_modules/gridsome/app/pages/404.vue"),
    meta: { isIndex: false }
  }
]

