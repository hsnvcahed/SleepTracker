<template>
  <v-container>
    <v-row class="d-flex justify-center text-center">
      <v-col>
        <v-btn class="rounded-pill green white--text mx-3" @click="logout">Log Out</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    async logout() {
      localStorage.removeItem('user');
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

<style lang="scss" scoped></style>
