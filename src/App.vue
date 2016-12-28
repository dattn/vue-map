<template>
  <div id="app">
    <vue-map :position="map.position" :zoom="map.zoom">
      <vue-marker v-for="markerPosition in markers" :position="markerPosition"></vue-marker>
    </vue-map>
  </div>
</template>

<script>
import VueMap from './components/Map'
import VueMarker from './components/Marker'

export default {
  name: 'app',
  components: {
    VueMap, VueMarker
  },
  data () {
    return {
      map: {
        position: [51.505, -0.09],
        zoom: 13
      },
      markers: [
        [51.5, -0.11],
        [51.52, -0.09],
        [51.5, -0.09],
        [51.52, -0.11]
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
