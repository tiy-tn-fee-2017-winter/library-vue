import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './route/application.vue';
import IndexPage from './route/index.vue';
import NewPage from './route/new.vue';
import EditPage from './route/edit.vue';

// Add routing functions and helpers to components
Vue.use(VueRouter);

// Route definitions
const routes = [
  { path: '/', component: IndexPage, name: 'index' },
  { path: '/books/new', component: NewPage, name: 'new' },
  { path: '/:id/edit', component: EditPage, name: 'edit' },
];

// Create the actual router for our application
const router = new VueRouter({
  mode: 'history',
  routes
});

//
const app = new Vue({ ...App, router });
app.$mount('.app');
