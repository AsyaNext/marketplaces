const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', meta: { title: 'Главная' }, component: () => import('pages/site/Index.vue') },
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
      {
        path: 'api',
        meta: { title: 'API' },
        props: true,
        component: () => import('pages/site/Api.vue'),
        children: [
          {
            name: 'api.page',
            path: '',
            meta: { title: 'API' },
            component: () => import('components/site/ApiArticle.vue')
          },
          {
            name: 'api.article',
            path: ':slug',
            meta: { title: 'API' },
            component: () => import('components/site/ApiArticle.vue')
          }
        ]
      },
      { path: 'rates', meta: { title: 'Тарифы' }, component: () => import('pages/site/Rates.vue') },
      { path: 'payment-and-return', meta: { title: 'Оплата и возврат' }, component: () => import('pages/site/PaymentAndReturn.vue') },
      { path: 'faq', meta: { title: 'FAQ' }, component: () => import('pages/site/Faq.vue') },
      { path: 'contacts', meta: { title: 'Контакты' }, component: () => import('pages/site/Contacts.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
