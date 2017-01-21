import Leaflet from 'leaflet'
import Layer from './mixins/Layer'
import LayerContainer from './mixins/LayerContainer'

export default {

  mixins: [ LayerContainer, Layer ],

  created () {
    this.$layerGroup = Leaflet.layerGroup()
    this.$setContainer(this.$layerGroup)
    this.$setLayer(this.$layerGroup)
  }

}
