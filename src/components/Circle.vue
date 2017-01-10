<script>
  import Leaflet from 'leaflet'
  import MapComponent from './MapComponent'

  export default {
    extends: MapComponent,
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

    mounted () {
      this.$circle = Leaflet.circle(this.position, this.radius)
      this.$mapReady.then(map => {
        this.$circle.addTo(map)
      })
    },

    beforeDestroy () {
      if (this.$map) {
        this.$map.removeLayer(this.$circle)
      }
    },

    watch: {
      position (position) {
        this.$circle.setLatLng(position)
      },

      radius (radius) {
        this.$circle.setRadius(radius)
      }
    }
  }
</script>
