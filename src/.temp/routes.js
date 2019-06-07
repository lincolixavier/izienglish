export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/lincolixavier/Documents/Projetos/izienglish/src/pages/About.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/lincolixavier/Documents/Projetos/izienglish/src/pages/Index.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lincolixavier/Documents/Projetos/izienglish/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lincolixavier/Documents/Projetos/izienglish/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  }
]

