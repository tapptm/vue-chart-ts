<template>
  <div class="app">
    <form @submit.prevent="addData">
      <input v-model="receipt" required placeholder="Incomes" />
      <input v-model="expense" required placeholder="Expenses" />
      <button small type="submit">Adddata</button>
    </form>
    <form @submit.prevent="update">
      <datepicker placeholder="Select Date" v-model="starts"></datepicker>
      {{starts}}
      <datepicker placeholder="Select Date" v-model="ends"></datepicker>
      {{ends}}
      <button small type="submit">update</button>
    </form>
    <line-chart ref="lineChart" :chart-data="chartData" :options="options" />
    <button small @click="addDataRandoms()">addData</button>
    <button small @click="randomizeData()">randomsData</button>
    <button small @click="removeData()">removeData</button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import LineChart from "@/components/LineChart.vue";
import {
  chartData,
  options,
  newDate,
  startDate,
  endDate
} from "../database/lineData";
import Datepicker from "vue-moment-datepicker";
import { start, end, timeFormat } from "../utils/dateFormat";
import moment from "moment";
import { __asyncDelegator } from "tslib";

@Component({
  components: { LineChart, Datepicker }
})
export default class ChartContainer extends Vue {
  chartData = chartData;

  starts = '01/07/2020';

  ends = '01/31/2020';
  
  type = "linear";

  options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "new - " + this.type
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: timeFormat,
            tooltipFormat: "ll HH:mm",
            unit: "day"
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date"
          },
          ticks: {
            display: true,
            maxRotation: 90,
            max: moment(this.ends).format(timeFormat),
            min: moment(this.starts).format(timeFormat)
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Costs"
          }
        }
      ]
    },
    layout: {
      padding: {
        left: 20
      }
    }
  };


  receipt = null;

  expense = null;

  getRandomInt() {
    return Math.floor(Math.random() * (4000 - 2000 + 1500)) + 200;
  }

  randomizeData() {
    chartData.datasets.forEach(datasets => {
      // console.log({ rand: datasets.data });
      const dataset = datasets;
      dataset.data = datasets.data.map(() => this.getRandomInt());
    });
    return this.$refs.lineChart.update();
  }

  update() {
    this.type = this.type === "linear" ? "logarithmic" : "linear";
    this.options.title.text = "Chart.js Line Chart - " + this.type;

    console.log(
      (this.options.title.text = "Chart.js Line Chart - " + this.type)
    );

    this.options.scales.xAxes[0].ticks.min = moment(this.starts).format(
      timeFormat
    );
    this.options.scales.xAxes[0].ticks.max = moment(this.ends).format(
      timeFormat
    );
    
    console.log(this.options.scales.xAxes[0].ticks.min);
    console.log(this.options.scales.xAxes[0].ticks.max);

    this.$refs.lineChart.update();
  }

  addData() {
    if (chartData.datasets.length >= 0) {
      chartData.labels.push(newDate(chartData.labels.length));
      chartData.datasets[0].data.push(this.receipt);
      chartData.datasets[1].data.push(this.expense);
      this.receipt = "";
      this.expense = "";
      // console.log({ add: lineData.labels });
    }
    return this.$refs.lineChart.update();
  }

  addDataRandoms() {
    if (chartData.datasets.length >= 0) {
      chartData.labels.push(newDate(chartData.labels.length));
      for (let index = 0; index < chartData.datasets.length; index += 1) {
        chartData.datasets[index].data.push(this.getRandomInt());
        // console.log({ addr: lineData.labels });
      }
    }
    return this.$refs.lineChart.update();
  }

  removeData() {
    chartData.labels.splice(-1, 1);
    chartData.datasets.forEach(datasets => {
      datasets.data.pop();
      // console.log({ rem: datasets.data });
    });
    return this.$refs.lineChart.update();
  }
}
</script>
