import Leaflet from 'leaflet'
import Path from './mixins/Path'

const defaultOptions = Leaflet.Polygon.prototype.options

export default {

  mixins: [ Path ],

  props: {
    bounds: {
      type: Array,
      required: true
    },
    fill: {
      type: Boolean,
      default: defaultOptions.fill
    }
  },

  created () {
    this.$rectangle = Leaflet.rectangle(this.bounds, {
      ...this.pathStyle
    })
    this.$setPath(this.$rectangle)
  },

  watch: {
    bounds (bounds) {
      this.$rectangle.setBounds(bounds)
    }
  }

}
