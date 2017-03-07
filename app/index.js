import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './route/application.vue';
import Index from './route/index.vue';
import NewBook from './route/new.vue';
import EditBook from './route/edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/books/new',
    name: 'new',
    component: NewBook,
  },
  {
    path: '/books/:id/edit',
    name: 'edit',
    component: EditBook,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
