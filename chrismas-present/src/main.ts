import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router"

import TheWelcome from "@/components/TheWelcome.vue";
import PresentFor from "@/components/PresentFor.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheWelcome },
        { path: '/present/:from/:to', component: PresentFor },
    ],

})

const app = createApp(App);
app.use(router)
app.mount('#app')
