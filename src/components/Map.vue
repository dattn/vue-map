<template>
  <div class="component-vue-map">
    <div class="map-container" ref="map"></div>
    <slot></slot>
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
    props: [ 'position', 'zoom' ],

    created () {
      this.$mapReady = new Promise(resolve => {
        this.$mapReadyResolve = resolve
      })
    },

    mounted () {
      this.$map = Leaflet.map(this.$refs.map).setView(this.position, this.zoom)
      this.$map.on('zoom', () => this.$emit('zoom', {
        zoom: this.$map.getZoom()
      }))
      this.$map.on('move', () => this.$emit('move', {
        position: this.$map.getCenter()
      }))

      Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.$map)

      this.$mapReadyResolve(this.$map)
    },

    watch: {
      zoom (zoom) {
        this.$map.setZoom(zoom)
      },

      position (position) {
        this.$map.panTo({
          lat: position.lat,
          lng: position.lng
        })
      }
    }

  }
</script>
