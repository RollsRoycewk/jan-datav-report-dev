<template>
  <common-card title="累计订单量" value="2,157,440">
    <template>
      <!-- <div
        id="total-orders-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div> -->
      <v-chart :option="getOptions()"></v-chart>
    </template>

    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin";

export default {
  name: "TotalOrders",
  mixins: [commonCardMixin],
  data() {
    return {};
  },
  mounted() {
    // const chartDom = document.getElementById("total-orders-chart");
    // const chart = this.$echarts.init(chartDom);
    // chart.setOption();
  },
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: [
              620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530,
              220, 620,
            ],
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
