<script setup>
import { ref } from "vue";

import { useAuthStore } from "../stores";

const email = ref("");
const username = ref("");
const password = ref("");

function onSubmit(values) {
  const authStore = useAuthStore();

  return authStore
    .register(email.value, username.value, password.value)
    .catch((error) => console.log({ apiError: error }));
}
</script>

<template>
  <h1>Inscription</h1>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        v-model="email"
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputUsername1" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputUsername1"
        v-model="username"
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
