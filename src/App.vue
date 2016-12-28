<template>
  <div>
    <vue-map :position="position" :zoom="zoom" @zoom="onZoom" @move="onMove">
      <vue-marker v-for="markerPosition in markers" :position="markerPosition"></vue-marker>
    </vue-map>
    <div>
      Latitude:
      <input type="number" step="any" v-model="lat" />
    </div>
    <div>
      Longitude:
      <input type="number" step="any" v-model="lng" />
    </div>
    <div>
      Zoom:
      <input type="number" step="any" v-model="zoom" />
    </div>
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
      lat: 49.611,
      lng: 6.13,
      zoom: 13,
      markers: [
        { lat: 49.611, lng: 6.13 },
        { lat: 49.62, lng: 6.118 }
      ]
    }
  },
  computed: {
    position () {
      return {
        lat: this.lat,
        lng: this.lng
      }
    }
  },
  methods: {
    onZoom (data) {
      this.zoom = data.zoom
    },

    onMove (data) {
      this.lat = data.position.lat
      this.lng = data.position.lng
    }
  }
}
</script>
