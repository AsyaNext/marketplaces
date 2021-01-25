const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', meta: { title: 'Главная' }, component: () => import('pages/site/Index.vue') },
      {
        path: 'blog',
        component: () => import('pages/site/Blog.vue'),
        children: [
          {
            name: 'blog.page',
            path: '',
            meta: { title: 'Блог' },
            component: () => import('components/site/ArticlesBlog.vue')
          },
          {
            name: 'blog.article',
            path: 'article/:id',
            meta: { title: 'Статья' },
            component: () => import('components/site/BaseArticle.vue')
          }
        ]
      },
      { path: 'api', meta: { title: 'API' }, component: () => import('pages/site/Api.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
