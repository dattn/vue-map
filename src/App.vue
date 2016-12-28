<template>
  <div id="app">
    <vue-map>
      <vue-marker v-for="position in markers" :position="position"></vue-marker>
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
      markers: [
        [51.5, -0.11],
        [51.7, -0.09],
        [51.5, -0.09],
        [51.7, -0.11]
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
