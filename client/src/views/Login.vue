<template>
  <v-container class="text-center d-flex justify-center">
    <v-col cols="5">
      <p class="text-h4">Please Log in</p>

      <v-text-field v-model="userInput" class="mt-15" label="Username"></v-text-field>
      <v-btn @click="login" style="background-color: #96909a" class="rounded-pill white--text outlined">Login</v-btn>
    </v-col>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userInput: '',
    };
  },
  methods: {
    async login() {
      console.log('THIS IS A NEW FUNCTION');

      const res = await axios({
        url: `${process.env.VUE_APP_SERVER}/user/${this.userInput}`,
        method: 'Get',
      });
      localStorage.setItem('user', res.data.id);
      this.$router.push({ path: '/' });
      this.$emit('loggedIn');
    },
  },
};
</script>

<style lang="scss" scoped></style>
