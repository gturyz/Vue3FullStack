import { defineStore } from "pinia";

import router from "../router";
import axios from "axios";

const baseUrl = `http://localhost:5000`;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async register(email, username, password) {
      const user = await axios.post(`${baseUrl}/signup`, {
        email: email,
        username: username,
        password: password,
      });
      router.push(this.returnUrl || "/connexion");
    },
    async login(email, password) {
      const user = await axios
        .post(`${baseUrl}/signin`, {
          email,
          password,
        })
        .then((res) => {
          return res.data;
        });
      // .then((res) => {
      // console.log(res);
      // update pinia state
      this.user = user;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      // redirect to previous url or default to home page
      router.push(this.returnUrl || "/");
      // });
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
});
