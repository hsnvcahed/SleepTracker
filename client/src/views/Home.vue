<template>
  <div>
    <div style="height: 20em; width: 90%; background-color: red" class="mx-auto mt-5 text-center">
      <p>Hier kommt ein Diagramm hin</p>
      <p>{{ sleepdata }}</p>
    </div>
    <v-data-table :items="sleepdata" :headers="headers" class="mt-4">
      
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    sleepdata: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Wake Up',
          value: 'wakeup',
        },
        {
          text: 'Sleep',
          value: 'sleep',
        },
        {
          text: 'Del',
        },
        { text: 'Edit' },
      ],
    };
  },
};
</script>
