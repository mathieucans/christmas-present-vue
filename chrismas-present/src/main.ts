import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router"

import GeneratePresent from "@/components/GeneratePresent.vue";
import PresentFor from "@/components/PresentFor.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: GeneratePresent },
        { path: '/present/:from/:to', component: PresentFor },
    ],

})

const app = createApp(App);
app.use(router)
app.mount('#app')
