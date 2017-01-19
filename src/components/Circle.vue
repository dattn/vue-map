<script>
  import Leaflet from 'leaflet'
  import MapComponent from './MapComponent'
  import Path from './Path'

  export default {
    extends: MapComponent,
    mixins: [ Path ],
    props: {
      position: {
        type: Object,
        required: true
      },
      radius: {
        type: Number,
        required: true
      }
    },

    render () {},

    created () {
      this.$path = Leaflet.circle(this.position, {
        radius: this.radius,
        ...this.pathStyle
      })
      this.$mapReady.then(map => {
        this.$path.addTo(map)
      })
    },

    beforeDestroy () {
      if (this.$map) {
        this.$map.removeLayer(this.$path)
      }
    },

    watch: {
      position (position) {
        this.$path.setLatLng(position)
      },

      radius (radius) {
        this.$path.setRadius(radius)
      }
    }
  }
</script>
