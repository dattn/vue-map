import Leaflet from 'leaflet'
import Layer from './mixins/Layer'

export default {

  mixins: [ Layer ],

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

  created () {
    this.$geoJson = Leaflet.geoJSON(this.data, {
      style: this.featureStyle
    })
    this.$setLayer(this.$geoJson)
  },

  watch: {
    featureStyle (featureStyle) {
      this.$geoJson.setStyle(featureStyle)
    },

    data (data) {
      this.$geoJson.clearLayers()
      this.$geoJson.addData(data)
    }
  }
}
