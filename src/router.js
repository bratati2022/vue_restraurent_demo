// import HomePage from "../src/components/HomePage";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import AddRestro from "./components/AddRestro";
import UpdateRestro from "./components/UpdateRestro";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "AddRestro",
    component: AddRestro,
    path: "/add",
  },
  {
    name: "UpdateRestro",
    component: UpdateRestro,
    path: "/update",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
