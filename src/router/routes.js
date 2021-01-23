const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', meta: { title: 'Главная' }, component: () => import('pages/site/Index.vue') },
      { path: 'blog', meta: { title: 'Блог' }, component: () => import('pages/site/Blog.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
