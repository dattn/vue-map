<script>
  import Leaflet from 'leaflet'
  import MapComponent from './MapComponent'

  export default MapComponent.extend({
    props: {
      data: {
        type: Object,
        required: true
      },
      featureStyle: {
        type: Function,
        default: function () {}
      }
    },

    render () {},

    mounted () {
      this.$geoJson = Leaflet.geoJSON(this.data, {
        style: this.featureStyle
      })
      this.$mapReady.then(map => {
        this.$geoJson.addTo(map)
      })
    },

    beforeDestroy () {
      if (this.$map) {
        this.$map.removeLayer(this.$geoJson)
      }
    },

    watch: {
      featureStyle (featureStyle) {
        this.$geoJson.setStyle(featureStyle)
      },

      data (data) {
        this.$geoJson.clearLayers()
        this.$geoJson.addData(data)
      }
    }
  })
</script>
