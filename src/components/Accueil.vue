<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <h1>{{ user ? `Bonjour ${user?.username}!` : `Bonjour Anonyme!` }}</h1>
</template>
