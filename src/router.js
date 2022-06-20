import { createRouter, createWebHistory } from "vue-router";
import ListVue from "./components/List.vue";
import AccueilVue from "./components/Accueil.vue";
import ConnexionVue from "./components/Connexion.vue";
import InscriptionVue from "./components/Inscription.vue";
import AboutVue from "./components/About.vue";
import HasardVue from "./components/Hasard.vue";
import { useAuthStore } from "./stores";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", name: "Accueil", component: AccueilVue },
    { path: "/about", name: "APropos", component: AboutVue },
    { path: "/connexion", name: "Connexion", component: ConnexionVue },
    { path: "/inscription", name: "Inscription", component: InscriptionVue },
    { path: "/list", name: "List", component: ListVue },
    { path: "/hasard", name: "Hasard", component: HasardVue },
  ],
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/about", "/", "/hasard", "/connexion", "/inscription"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/connexion";
  }
});

export default router;
