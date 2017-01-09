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
    props: {
      position: {
        type: Object,
        required: true
      }
    },

    watch: {
      position (position) {
        this.$marker.setLatLng({
          lat: position.lat,
          lng: position.lng
        })
      }
    },

    render () {},

    mounted () {
      this.$marker = Leaflet.marker(this.position)

      // passthru events
      const mapEvents = [
        'click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend',
        'move', 'add', 'remove', 'popupopen', 'popupopen'
      ]
      mapEvents.forEach(eventName => this.$marker.on(eventName, ev => this.$emit(eventName, ev)))

      this.$mapReady.then(map => {
        this.$marker.addTo(map)
      })
    },

    beforeDestroy () {
      if (this.$map) {
        this.$map.removeLayer(this.$marker)
      }
    }
  })
</script>
