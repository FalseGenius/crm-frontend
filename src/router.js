import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from './components/LoginScreen.vue';
import DashboardPage from './components/DashboardPage.vue';

const routes = [
  { path: '/', component: LoginScreen },
  { path: '/dashboard', component: DashboardPage },
  // Add other routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
