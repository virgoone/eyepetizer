import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'components/Hello';
import Home from 'components/Home';
import Detail from 'components/Detail';

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail/:vid',
      name: 'Detail',
      component: Detail,
    },
  ],
});
