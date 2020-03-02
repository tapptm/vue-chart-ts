<script lang="ts">
import Vue from "vue";
import { Line ,mixins} from "vue-chartjs";
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import lineChart from "@/interface/LineChart";
const { reactiveProp } = mixins

@Component
export default class Chart extends Mixins(Line, reactiveProp) {
  @Prop({ default: null }) public chartData!: lineChart;
  @Prop({ default: null }) public options!: object;

  public mounted() {
    this.renderChart(this.chartData, this.options);
  }

  update() {
    this.$data._chart.update();
  }
  destroy(){
    this.$data._chart.destroy();
  }
  reset(){
    this.$data._chart.reset();
  }
}
</script>