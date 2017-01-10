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
    }
  })
</script>
