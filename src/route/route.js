import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../page/HomePage.vue';
import MessagePage from '../page/MessagePage.vue';
import ProjekPage from '../page/ProjekPage.vue';
import VideoPage from '../page/VideoPage.vue';
import ProfilPage from '../page/ProfilPage.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            home: <HomePage />
        }
    },
    {
        path: '/message',
        name: 'message',
        components: {
            home: <MessagePage />
        }
    },
    {
        path: '/projek',
        name: 'projek',
        components: {
            home: <ProjekPage />
        }
    },
    {
        path: '/video',
        name: 'video',
        components: {
            home: <VideoPage />
        }
    },
    {
        path: '/profil',
        name: 'profil',
        components: {
            home: <ProfilPage />
        }
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;