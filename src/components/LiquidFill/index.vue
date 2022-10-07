<template>
  <div id="container">
  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  name: "LiquidFill",
  mounted() {
    const chart = this.$echarts.init(document.getElementById('container'));
    chart.setOption({
      series: [{
        type: 'liquidFill',

        color: ['red', '#0f0', 'rgb(0, 0, 255)'],
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        },
        data: [0.6, {
          value: 0.5,
          direction: 'left',
          itemStyle: {
            color: 'red'
          }
        }, 0.4, {
          value: 0.3,
          itemStyle: {
            color: 'red',
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9
            }
          }
        }],
        // 关闭动画相关
        // waveAnimation: false,
        // animationDuration: 0,
        // animationDurationUpdate: 0,
        // 波浪振幅
        // amplitude: 0,
        // backgroundStyle: {
        //   borderWidth: 5,
        //   borderColor: 'red',
        //   color: 'yellow'
        // },
        // outline: {
        //   show: false
        // },
        // shape: 'diamond'
        label: {
          fontSize: 18
        },
        center: ['50%', '50%'],
        radius: '80%',
      }]
    })
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;

}
</style>
