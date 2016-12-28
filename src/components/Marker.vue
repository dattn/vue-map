<template>
  <div>Marker</div>
</template>

<script>
  import Leaflet from 'leaflet'
  import MapComponent from './MapComponent'

  // marker image fix
  // https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-261904061
  delete Leaflet.Icon.Default.prototype._getIconUrl
  Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  })

  export default MapComponent.extend({
    props: [ 'position' ],

    mounted () {
      this.$marker = Leaflet.marker(this.position)
      this.$on('map-ready', () => {
        this.$marker.addTo(this.$map)
      })
    },

    beforeDestroy () {
      if (this.$map) {
        this.$map.removeLayer(this.$marker)
      }
    }
  })
</script>
