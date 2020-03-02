<template>
  <div>
    <pie-chart :chart-data="chartdata" :options="config" />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import PieChart from "../components/PieChart.vue";
import { options, data } from "../database/piedata";

@Component({
  components: { PieChart }
})
export default class PieChartContainer extends Vue {
  chartdata = data;
  config = options;



}
</script>
