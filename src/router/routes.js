
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/growth', component: () => import('pages/Growth.vue') },
      { path: '/associates', component: () => import('pages/Associates.vue') },
      { path: '/services', component: () => import('pages/Services.vue') },


      { path: '/projects', component: () => import('pages/Project.vue') },
      { path: '/programs', component: () => import('pages/Programs.vue') },

      { path: '/growth', component: () => import('pages/Growth.vue') },
      { path: '/busdev', component: () => import('pages/Busdev.vue') },
      { path: '/joinmsme', component: () => import('pages/Joinmsme.vue') },
      { path: '/greenjacket', component: () => import('pages/Greenjac.vue') }







    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
