import { createRouter, createWebHashHistory } from 'vue-router';
import Test from '../src/components/Test.vue';
import Home from '../src/components/Home.vue';
let history = createWebHashHistory();
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test,
  },
];

export default createRouter({ history, routes })