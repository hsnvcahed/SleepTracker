<template>
  <div>
    <v-row>
      <div class="mx-auto mt-5 text-center d-flex justify-center">
        <apexchart
          v-if="sleepdata.length != 0"
          width="330"
          type="area"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-row>
    <v-row class="d-flex justify-center mx-auto ml-15">
      <v-col>
        <v-text-field label="Wake Up" v-model="dialogCreateWakeup"> </v-text-field>
        <v-text-field label="Sleep" v-model="dialogCreateSleep"> </v-text-field>
        <v-text-field label="Date" v-model="dialogCreateDate"> </v-text-field>
      </v-col>
      <v-col>
        <v-btn
          fab
          class="white--text mt-10"
          style="background-color: #96909a"
          @click="createTime()"
        >
          <v-icon> mdi-file-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="mb-10">
        <v-data-table
          :items="sleepdata"
          width="330"
          item-key="name"
          :headers="headers"
          class="mt-4 mx-15"
        >
          <template v-slot:item.del="{ item }">
            <v-icon @click="deleteSleep(item)">mdi-delete</v-icon>
          </template>
          <template v-slot:item.edit="{ item }">
            <v-icon @click="editSleep(item)">mdi-pencil</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row v-if="dialogEdit" class="d-flex justify-center mx-auto ml-15">
      <v-col id="editDialogFrame">
        <v-text-field label="Wake Up" v-model="dialogEditWakeup"> </v-text-field>
        <v-text-field label="Sleep" v-model="dialogEditSleep"> </v-text-field>
      </v-col>
      <v-col>
        <v-btn
          fab
          class="white--text mt-10"
          style="background-color: #96909a"
          @click="changeTime()"
        >
          <v-icon> mdi-content-save </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  props: {
    sleepdata: {
      type: Array,
    },
  },
  methods: {
    editSleep(sleepData) {
      this.editId = sleepData.id;
      this.dialogEdit = true;
      this.dialogEditWakeup = sleepData.wakeup;
      this.dialogEditSleep = sleepData.sleep;
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 200);
    },
    async createTime() {
      await axios({
        url: `${process.env.VUE_APP_SERVER}/time`,
        method: 'POST',
        ContentType: 'application/json',
        data: {
          sleep: this.dialogCreateSleep,
          wakeup: this.dialogCreateWakeup,
          date: this.dialogCreateDate,
          userId: localStorage.getItem('user'),
        },
      });
      this.$emit('loggedIn');
    },
    async deleteSleep(item) {
      await axios({
        url: `${process.env.VUE_APP_SERVER}/time/${item.id}`,
        method: 'DELETE',
      });
      this.$emit('loggedIn');
    },
    async changeTime() {
      this.dialogEdit = false;
      await axios({
        url: `${process.env.VUE_APP_SERVER}/time/${this.editId}`,
        method: 'PATCH',
        ContentType: 'application/json',
        data: {
          sleep: this.dialogEditSleep,
          wakeup: this.dialogEditWakeup,
        },
      });
      this.$emit('loggedIn');
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
      editId: 0,
      dialogEdit: false,
      dialogEditWakeup: '',
      dialogEditSleep: '',
      dialogCreateWakeup: '',
      dialogCreateSleep: '',
      dialogCreateDate: '',
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
