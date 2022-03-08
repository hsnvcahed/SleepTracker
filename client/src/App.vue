<template>
  <v-app>
    <v-app-bar style="background-color: #e7e4d6" app>
      <div class="text-center max-auto" v-if="$route.name == 'About'">
        <v-icon>mdi-account</v-icon>
        <span class="mx-5">Currently Logged in: {{ uname }}</span>
      </div>
    </v-app-bar>
    <v-main class="mb-15">
      <router-view @loggedIn="getData()" :sleepdata="sleepData" />
    </v-main>
    <v-footer style="background-color: #e7e4d6" :fixed="true" v-if="$route.name != 'Login'" elevation="3">
      <v-btn :to="$route.name == 'Home' ? '/about' : '/'" elevation="4" fab outlined class="white rounded-circle ml-auto"
        ><img src="./assets/logo.png" style="width: 4%" alt=""
      /></v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    sleepData: [],
    uname: '',
    serverAddress: process.env.VUE_APP_SERVER,
  }),
  methods: {
    async getData() {
      const res = await axios({
        url: `${this.serverAddress}/sleepdata/${localStorage.getItem('user')}`,
        method: 'GET',
      });
      console.log(res.data);

      this.sleepData = res.data;
    },
    checkForLogin() {
      const loginToken = localStorage.getItem('user');
      if (!loginToken) {
        this.$router.push({ path: '/login' });
        return false;
      } else {
        return true;
      }
    },
    async getUser() {
      const UserId = localStorage.getItem('user');
      const res = await axios({
        url: `${this.serverAddress}/user/${UserId}`,
        method: 'GET',
      });
      this.uname = res.data.name;
      console.log(res);
    },
  },
  created() {
    if (this.checkForLogin()) {
      this.getData();
      this.getUser();
    }
  },
};
</script>
