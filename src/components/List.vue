<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useTasksStore, useAuthStore } from "../stores";

const taskStore = useTasksStore();
const { tasks } = storeToRefs(taskStore);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

taskStore.getAll(user.value.token);

const desc = ref("");

function onSubmit() {
  return taskStore
    .add(desc.value, user.value.token)
    .catch((error) => console.log(error));
}
</script>

<template>
  <h1>Todolist</h1>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="exampleInputDescription1" class="form-label"
        >Description</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleInputDescription1"
        v-model="desc"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <ul class="list-group" v-if="tasks.length">
    <li v-for="task in tasks" class="list-group-item" :key="task.id">
      {{ task.description }}
    </li>
  </ul>
</template>
