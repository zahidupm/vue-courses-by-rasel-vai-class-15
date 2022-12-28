import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

import './style.css';

createApp(App).use(router).mount('#app')
