import { createRouter, createWebHistory } from "vue-router";
import ListVue from "./components/List.vue";
import AccueilVue from "./components/Accueil.vue";
import ConnexionVue from "./components/Connexion.vue";
import InscriptionVue from "./components/Inscription.vue";
import AboutVue from "./components/About.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "Accueil", component: AccueilVue },
    { path: "/about", name: "APropos", component: AboutVue },
    { path: "/connexion", name: "Connexion", component: ConnexionVue },
    { path: "/inscription", name: "Inscription", component: InscriptionVue },
    { path: "/list", name: "List", component: ListVue },
  ],
});

export default router;
