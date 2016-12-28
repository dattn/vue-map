<template>
  <div>
    <vue-map :position="position" :zoom="zoom" @zoom="onZoom">
      <vue-marker v-for="markerPosition in markers" :position="markerPosition"></vue-marker>
    </vue-map>
    <div>
      Latitude:
      <input type="number" step="any" v-model="lat" />
    </div>
    <div>
      Longitude:
      <input type="number" step="any" v-model="long" />
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
      lat: 51.505,
      long: -0.09,
      zoom: 13,
      markers: [
        [51.5, -0.11],
        [51.52, -0.09],
        [51.5, -0.09],
        [51.52, -0.11]
      ]
    }
  },
  computed: {
    position () {
      return [ this.lat, this.long ]
    }
  },
  methods: {
    onZoom (data) {
      this.zoom = data.zoom
    }
  }
}
</script>
