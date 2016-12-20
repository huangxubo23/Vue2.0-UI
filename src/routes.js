import Home from './components/home/Home.vue';
import user from './components/user/UserApp.vue';
import UserSystem from './components/user/UserSystem.vue';

export const routes = [{
    path: "/",
    component: Home
}, {
    path: '/user/system',
    component: UserSystem
}, {
    path: '/user/app',
    component: user
}]