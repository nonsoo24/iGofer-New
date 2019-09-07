import SignIn from './components/SignIn.vue';
import HomeContent from './components/HomeContent.vue';
import SignUp from './components/SignUp.vue';

export const routes = [
    {path: '', component: HomeContent},
    {path: '/SignIn', component: SignIn},
    {path: '/SignUp', component: SignUp}
];