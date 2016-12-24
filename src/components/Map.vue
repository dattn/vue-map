<template>
  <div class="component-vue-map">
    <div class="map-container" ref="map"></div>
  </div>
</template>

<style>
  @import url(../../node_modules/leaflet/dist/leaflet.css);

  .component-vue-map {
    position: relative;
    height: 300px;
  }

  .component-vue-map .map-container {
    height: 100%;
    width: 100%;
  }
</style>

<script>
  import Leaflet from 'leaflet'

  export default {
    mounted () {
      this.map = Leaflet.map(this.$refs.map).setView([51.505, -0.09], 13)
      Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
    }
  }
</script>
