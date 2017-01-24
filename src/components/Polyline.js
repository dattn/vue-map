import Leaflet from 'leaflet'
import Path from './mixins/Path'

export default {

  mixins: [ Path ],

  props: {
    latlngs: {
      type: Array,
      required: true
    }
  },

  created () {
    this.$polyline = Leaflet.polyline(this.latlngs, {
      ...this.pathStyle
    })
    this.$setPath(this.$polyline)
  },

  watch: {
    latlngs (latlngs) {
      this.$polyline.setLatLngs(latlngs)
    }
  }

}
