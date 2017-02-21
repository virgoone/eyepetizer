import Vue from 'vue';
import axios from 'axios';

import App from './App';

import router from './router';

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app');

