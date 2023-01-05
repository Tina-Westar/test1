import { createApp } from 'vue'
import App from './App.vue'
import router from '../router';
// import Vue from 'vue';
import './style.css'
// Import our custom CSS
import './style/all.scss'
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
// import axios from '../node_modules/axios';


createApp(App).use(router).mount('#app')
