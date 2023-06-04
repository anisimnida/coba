import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import beranda from '../pages/beranda'
import kns from '../pages/kns'
import order from '../pages/order'
import menu from '../pages/menu'


const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    children: [
            {
        name: "beranda",
        component: beranda, 
        path: "/beranda",
      },
      {
        name: "kns",
        component: kns, 
        path: "/kns",
      },
                 {
        name: "order",
        component: order, 
        path: "/order",
      },
      {
        name: "menu",
        component: menu, 
        path: "/menu",
      },
      
    ]
  }
];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}