<template>
  <v-app>
    <v-app-bar style="background-color: #e7e4d6" app>
      <p class="mt-4 mx-auto">
        Sleep: <v-btn>{{ timeTrigger1 }}</v-btn> Wake Up: <v-btn>{{ timeTrigger2 }}</v-btn>
      </p>
    </v-app-bar>
    <v-main class="mb-15">
      <router-view @loggedIn="getData()" :username="uname" :sleepdata="sleepData" />
    </v-main>
    <v-footer
      style="background-color: #e7e4d6"
      :fixed="true"
      v-if="$route.name != 'Login'"
      elevation="3"
    >
      <v-btn
        :to="$route.name == 'Home' ? '/about' : '/'"
        elevation="4"
        fab
        outlined
        class="white rounded-circle ml-auto"
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
    timeTrigger1: '',
    timeTrigger2: '',
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
    scheduleTimer(time) {
      const hour = Number(time.split(':')[0]);
      const min = Number(time.split(':')[1]);

      const hourTmrw = new Date();
      hourTmrw.setHours(Number(this.timeTrigger2.split(':')[0]));

      const startTime = new Date();
      startTime.setHours(hour, min);

      const now = new Date();
      const startTmrw = 24 - now.getHours() + hourTmrw.getHours();
      if (startTime.getTime() < now.getTime()) {
        startTime.setHours(startTime.getHours() + 24);
      }

      const firstTriggerAfterMs = startTime.getTime() - now.getTime();
      console.log(firstTriggerAfterMs);

      setTimeout(() => {
        this.callNotify();

        setTimeout(() => {
          this.callNotify();
        }, startTmrw * 60 * 60 * 1000);
      }, firstTriggerAfterMs);
    },
    async callNotify() {
      await axios({
        url: `${process.env.VUE_APP_SERVER}/notify`,
        method: 'POST',
        'Content-Type': 'application/json',
        data: {
          message: 'This is your daily sleeptracker reminder',
        },
      });
    },
  },
  created() {
    if (this.checkForLogin()) {
      this.getData();
      this.getUser();
      setTimeout(() => {
        const lastSleep = this.sleepData[this.sleepData.length - 1].sleep;
        const lastWake = this.sleepData[this.sleepData.length - 1].wakeup;
        this.timeTrigger1 = lastSleep;
        this.timeTrigger2 = lastWake;
        this.scheduleTimer(this.timeTrigger1);
      }, 300);
    }
  },
};
</script>
