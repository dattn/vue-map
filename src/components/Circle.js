import Leaflet from 'leaflet'
import Path from './mixins/Path'

const defaultOptions = Leaflet.CircleMarker.prototype.options

export default {

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

  created () {
    this.$circle = Leaflet.circle(this.position, {
      radius: this.radius,
      ...this.pathStyle
    })
    this.$setPath(this.$circle)
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
