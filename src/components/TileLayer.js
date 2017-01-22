import Leaflet from 'leaflet'
import Layer from './mixins/Layer'

export default {

  mixins: [ Layer ],

  props: {
    url: {
      type: String,
      required: true
    },
    attribution: {
      type: String,
      default: ''
    }
  },

  created () {
    this.$tileLayer = Leaflet.tileLayer(this.url, {
      attribution: this.attribution
    })
    this.$setLayer(this.$tileLayer)
  }

}
