import Leaflet from 'leaflet'
import Path from './mixins/Path'

const defaultOptions = Leaflet.Polygon.prototype.options

export default {

  mixins: [ Path ],

  props: {
    latlngs: {
      type: Array,
      required: true
    },
    fill: {
      type: Boolean,
      default: defaultOptions.fill
    }
  },

  created () {
    this.$polygon = Leaflet.polygon(this.latlngs, {
      ...this.pathStyle
    })
    this.$setPath(this.$polygon)
  },

  watch: {
    latlngs (latlngs) {
      this.$polygon.setLatLngs(latlngs)
    }
  }

}
