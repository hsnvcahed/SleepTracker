<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/9a93f33e-376b-4e0a-ae63-58920e62d3d4-profile_image-300x300.png"
          ></v-img>
        </v-card>
      </v-col>
      <v-col class="mx-auto">
        <v-card>
          <v-card-title> User - {{ username }} </v-card-title>
          <v-spacer></v-spacer>
          <v-card-text>
            Current Sum Slept: {{ timeSlept }} h <br />
            Least Hours Slept: {{ leastTimeSlept }} h <br />
            Most Hours Slept: {{ mostTimeSlept }} h
            <v-divider></v-divider>
            <v-btn class="my-2" @click="subscribe()"><v-icon>mdi-bell-ring</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center">
      <v-col>
        <v-btn
          style="background-color: #96909a"
          class="rounded-pill white--text mx-3"
          @click="logout"
          >Log Out</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    username: {
      type: String,
    },
    sleepdata: {
      type: Array,
    },
  },
  methods: {
    async logout() {
      localStorage.removeItem('user');
      this.$router.push({ path: '/login' });
    },
    async subscribe() {
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(
          'BEnTSVOGR5Dm8e_5lw4W2Wgifs6CXIDMDLdRvmdXh0oImvWA6TGGVy0rfYQTuBGXFLNs_I2hWWmKRtKZFclCBtg',
        ),
      });
      await axios.post('/subscribe', subscription);
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
  },
  computed: {
    timeSlept() {
      let sumSleep = 0;
      this.sleepdata.forEach((day) => {
        const sleepTemp = Number(day.sleep.substring(0, 2));
        const wakeTemp = Number(day.wakeup.substring(0, 2));
        sumSleep += sleepTemp - wakeTemp;
      });
      return sumSleep;
    },
    leastTimeSlept() {
      let lowestNumber = 0;
      this.sleepdata.forEach((day) => {
        const sleepTemp = Number(day.sleep.substring(0, 2));
        const wakeTemp = Number(day.wakeup.substring(0, 2));
        const diffTemp = sleepTemp - wakeTemp;
        if (diffTemp > lowestNumber) lowestNumber = diffTemp;
      });
      return 24 - lowestNumber;
    },
    mostTimeSlept() {
      let mostNumber = Infinity;
      this.sleepdata.forEach((day) => {
        const sleepTemp = Number(day.sleep.substring(0, 2));
        const wakeTemp = Number(day.wakeup.substring(0, 2));
        const diffTemp = sleepTemp - wakeTemp;
        if (diffTemp < mostNumber) mostNumber = diffTemp;
      });
      return 24 - mostNumber;
    },
  },
};
</script>

<style lang="scss" scoped></style>
