import axios from "axios";
import { defineStore } from "pinia";

const baseUrl = `http://localhost:5000`;

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [],
  }),
  actions: {
    async getAll(token) {
      this.tasks = { loading: true };
      axios
        .get(`${baseUrl}/api/tasks`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((tasks) => (this.tasks = tasks.data))
        .catch((error) => (this.tasks = { error }));
    },
    async add(desc, token) {
      this.tasks = { loading: true };
      axios
        .post(
          `${baseUrl}/api/tasks`,
          { description: desc },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((task) => {
          // let t = this.tasks;
          // t.push(task.data);
          this.$state.tasks.push(task.data);
        })
        .catch((error) => (this.tasks = { error }));
    },
  },
});
