<script setup>
import { ref } from "vue";

import { useAuthStore } from "../stores";

const email = ref("");
const password = ref("");

function onSubmit(values) {
  const authStore = useAuthStore();

  return authStore
    .login(email.value, password.value)
    .catch((error) => console.log(error));
}
</script>

<template>
  <h1>Connexion</h1>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
