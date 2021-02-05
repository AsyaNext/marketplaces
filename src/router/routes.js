const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', meta: { title: 'Главная' }, component: () => import('pages/site/Index.vue') },
      { path: 'activate/:uid/:token', name: 'activate', meta: { title: 'Активация' }, component: () => import('pages/Activate.vue') },
      { path: 'password/:uid/:token', name: 'password', meta: { title: 'Восстановление пароля' }, component: () => import('pages/Password.vue') },
      {
        path: 'blog',
        props: true,
        component: () => import('pages/site/Blog.vue'),
        children: [
          {
            name: 'blog.page',
            path: '',
            meta: { title: 'Блог' },
            props: true,
            component: () => import('components/site/blog/ArticlesBlog.vue')
          },
          {
            name: 'blog.article',
            path: 'article/:id',
            meta: { title: 'Статья' },
            component: () => import('components/site/blog/BlogArticle.vue')
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
      {
        path: 'faq',
        props: true,
        component: () => import('pages/site/Faq.vue'),
        children: [
          {
            name: 'faq.page',
            path: '',
            meta: { title: 'FAQ' },
            props: true,
            component: () => import('components/site/faq/CategoriesForFAQ.vue')
          },
          {
            name: 'faq.category',
            path: ':id',
            meta: { title: 'Категория' },
            component: () => import('components/site/faq/ArticlesInCategory.vue')
          },
          {
            name: 'faq.article',
            path: 'article/:id',
            meta: { title: 'Статья' },
            component: () => import('components/site/faq/FAQArticle.vue')
          }
        ]
      },
      { path: 'contacts', meta: { title: 'Контакты' }, component: () => import('pages/site/Contacts.vue') }
    ]
  },
  { path: '/service', component: () => import('pages/service/IndexService.vue') },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
