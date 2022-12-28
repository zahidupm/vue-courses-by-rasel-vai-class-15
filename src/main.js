import { createApp } from 'vue';
import App from './App.vue';
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');

import './style.css';

createApp(App).mount('#app')
