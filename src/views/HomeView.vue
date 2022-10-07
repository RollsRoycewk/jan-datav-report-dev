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

export default {
  name: "HomeView",
  components: {
    BottomView,
    MapView,
    SalesView,
    TopView,
  },
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
