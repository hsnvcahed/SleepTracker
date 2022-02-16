<template>
  <v-app>
    <v-app-bar app>
      <div class="text-center max-auto" v-if="$route.name == 'About'">
        <v-icon>mdi-account</v-icon>
        <span class="mx-5">Currently Logged in: {{ uname }}</span>
      </div>
    </v-app-bar>
    <v-main>
      <router-view :sleepdata="sleepData" />
    </v-main>
    <v-bottom-navigation v-if="$route.name != 'Login'" elevation="2" height="80">
      <v-btn :to="$route.name == 'Home' ? '/about' : '/'" elevation="4" fab outlined class="rounded-circle ml-auto"
        ><img src="./assets/logo.png" style="width: 4%" alt=""
      /></v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    sleepData: [],
    uname: '',
  }),
  methods: {
    async getData() {
      const res = await axios({
        url: 'http://localhost:3000/sleepdata/1',
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
        url: `http://localhost:3000/user/${UserId}`,
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
