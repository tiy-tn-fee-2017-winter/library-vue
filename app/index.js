import 'whatwg-fetch';
import Vue from 'vue';
import App from './route/application.vue';

const app = new Vue(App);

app.$mount('.app');
