<script>
  import Leaflet from 'leaflet'
  import MapComponent from './MapComponent'
  import Path from './Path'

  const defaultOptions = Leaflet.CircleMarker.prototype.options

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
        default: defaultOptions.radius
      },
      fill: {
        type: Boolean,
        default: defaultOptions.fill
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
      this.$path.remove()
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
