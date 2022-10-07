<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import BottomView from "@/components/BottomView";
import MapView from "@/components/MapView";
import SalesView from "@/components/SalesView";
import TopView from "@/components/TopView";
import {wordcloud} from "@/api/index"

export default {
  name: "HomeView",
  components: {
    BottomView,
    MapView,
    SalesView,
    TopView,
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  },
  // provide() {
  //   return {
  //     getReportData: this.getReportData,
  //     getWordCloud: this.getWordCloud,
  //     getMapData: this.getMapData
  //   }
  // },
  mounted() {
    // screenData().then(data => { this.reportData = data })
    // wordcloud().then(data => { this.wordCloud = data })
    // mapScatter().then(data => { this.mapData = data })
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>
