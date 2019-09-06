import SignIn from './components/SignIn.vue';
import HomeContent from './components/HomeContent.vue';

export const routes = [
    {path: '', component: HomeContent},
    {path: '/SignIn', component: SignIn}
];