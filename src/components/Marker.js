import Leaflet from 'leaflet'
import Layer from './mixins/Layer'

// marker image fix
// https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-261904061
delete Leaflet.Icon.Default.prototype._getIconUrl
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {

  mixins: [ Layer ],

  props: {
    position: {
      type: Object,
      required: true
    },
    icon: {
      type: Leaflet.Icon,
      default () {
        return new Leaflet.Icon.Default()
      }
    }
  },

  watch: {
    position (position) {
      this.$marker.setLatLng(position)
    },

    icon (icon) {
      this.$marker.setIcon(icon)
    }
  },

  created () {
    this.$marker = Leaflet.marker(this.position, {
      icon: this.icon
    })
    this.$setLayer(this.$marker)
  },

  mounted () {
    // passthru events
    const mapEvents = [
      'click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend',
      'move', 'add', 'remove', 'popupopen', 'popupopen'
    ]
    mapEvents.forEach(eventName => this.$marker.on(eventName, ev => this.$emit(eventName, ev)))
  }
}
