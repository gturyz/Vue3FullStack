<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Accueil' }"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" :to="{ name: 'Inscription' }"
              >Inscription</router-link
            >
          </li>
          <li class="nav-item" v-if="user">
            <a class="nav-link" @click="authStore.logout">Deconnexion</a>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" :to="{ name: 'Connexion' }"
              >Connexion</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'APropos' }"
              >A propos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'List' }"
              >Todolists</router-link
            >
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>
