import { createRouter, createWebHistory } from 'vue-router';
import Home from '@app/views/Home.vue';
import Components from '@app/views/Components.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash });
        }, 500);
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.noScroll && from.meta.noScroll) {
      return {};
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { title: 'Home' },
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
      meta: { title: 'Components' },
    },
  ],
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'playground';
});

export default router;
