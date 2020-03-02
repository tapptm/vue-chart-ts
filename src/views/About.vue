<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row">
      <div class="column">
        <Line-chart-container />
      </div>
    </div>
  </div>
</template>
<script>
import LineChartContainer from "@/components/LineChartContainer.vue";
import PieChartContainer from "@/components/PieChartContainer.vue";

export default {
  components: {
    LineChartContainer,
    // PieChartContainer
  }
};
</script>
<style scoped>
/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 100%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>