<template>
  <div>
    <v-row>
      <div class="mx-auto mt-5 text-center d-flex justify-center">
        <apexchart v-if="sleepdata.length != 0" width="1000" type="area" :options="chartOptions" :series="series"></apexchart>
      </div>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="7">
        <v-data-table :items="sleepdata" item-key="name" :headers="headers" class="mt-4 mx-15">
          <template v-slot:item.del="{ item }">
            <v-icon>mdi-delete</v-icon>
          </template>
          <template v-slot:item.edit="{ item }">
            <v-icon @click="editSleep(item)">mdi-pencil</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row v-if="dialogEdit" class="d-flex justify-center">
      <v-col id="editDialogFrame" cols="2">
        <v-text-field label="Wake Up" v-model="dialogEditWakeup"> </v-text-field>
        <v-text-field label="Sleep" v-model="dialogEditSleep"> </v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn fab class="white--text mt-10" style="background-color: #96909a" @click="dialogEdit = false">
          <v-icon> mdi-content-save </v-icon>
        </v-btn>
      </v-col>
    </v-row>
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
  methods: {
    editSleep(sleepData) {
      this.dialogEdit = true;
      this.dialogEditWakeup = sleepData.wakeup;
      this.dialogEditSleep = sleepData.sleep;
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 200);
    },
  },
  computed: {
    series() {
      return [
        { name: 'wakeup', data: this.sleepdata.map((el) => el.wakeup) },
        { name: 'sleep', data: this.sleepdata.map((el) => el.sleep) },
      ];
    },
  },
  data() {
    return {
      dialogEdit: false,
      dialogEditWakeup: '',
      dialogEditSleep: '',
      chartOptions: {
        colors: ['#96909A', '#E7E4D6'],
        chart: {
          id: 'vuechart-example',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: this.sleepdata.map((el) => el.date),
        },
      },
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
          text: 'Date',
          value: 'date',
        },
        {
          text: 'Del',
          value: 'del',
        },
        { text: 'Edit', value: 'edit' },
      ],
    };
  },
};
</script>
