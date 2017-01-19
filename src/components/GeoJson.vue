<script>
  import Leaflet from 'leaflet'
  import MapComponent from './MapComponent'

  export default {
    extends: MapComponent,
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

    created () {
      this.$geoJson = Leaflet.geoJSON(this.data, {
        style: this.featureStyle
      })
      this.$mapReady.then(map => {
        this.$geoJson.addTo(map)
      })
    },

    beforeDestroy () {
      this.$geoJson.remove()
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
  }
</script>
