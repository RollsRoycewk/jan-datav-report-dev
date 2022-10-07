<template>
  <div id="wordcloud-container">
  </div>
</template>

<script>
import 'echarts-wordcloud';

export default {
  name: "WordCloud",
  mounted() {
    const chart = this.$echarts.init(document.getElementById('wordcloud-container'));

    chart.setOption({
      series: [{
        type: 'wordCloud',
        data: [{
          name: '凯哥哥你好啊',
          value: 100,
          // textStyle: {}
        }, {
          name: '国庆你都做了什么呢',
          value: 50,
          // textStyle: {}
        }, {
          name: 'cesium',
          value: 25,
          // textStyle: {}
        }, {
          name: '数据可视化',
          value: 150,
          // textStyle: {}
        }, {
          name: 'React',
          value: 75,
          // textStyle: {}
        }, {
          name: 'Android/IOS',
          value: 55,
          // textStyle: {}
        }],
        shape: 'circle',
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: function () {
            // Random color
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        },
        emphasis: {
          focus: 'self',

          textStyle: {
            textShadowBlur: 10,
            textShadowColor: '#333'
          }
        },
      }]
    });
  }
}
</script>

<style scoped>
#wordcloud-container {
  width: 100%;
  height: 100%;
  /*height: 500px;*/
}
</style>
