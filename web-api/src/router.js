import { createRouter, createWebHistory } from "vue-router";
import EmpList from "./components/EmpList.vue";
import EmpCreate from "./components/EmpCreate.vue";
import EmpEdit from "./components/EmpEdit.vue";


const routes = [
  {
    path: "/empcreate",
    component: EmpCreate,
  },
  {
    path: "/emplist",
    component: EmpList,
  },
  {
    path: "/emp/edit/:id",
    component: EmpEdit,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
  