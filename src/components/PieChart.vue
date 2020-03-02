<script lang="ts">
import Vue from "vue";
import { Pie } from "vue-chartjs";
import { Component, Mixins, Prop } from "vue-property-decorator";
import pieChart from "../interface/PieChart"

@Component
export default class PieChart extends Mixins(Pie) {
  @Prop() public chartData!: pieChart;
  @Prop({ default: null }) public options!: object;
  
  public mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>