export default {

  beforeCreate () {
    if (!this.$parent.$containerReady) {
      throw new Error('A Layer component must be a child of LayerContainer')
    }
    this.$setLayer = layer => {
      this.$layer = layer
      this.$parent.$containerReady.then(container => {
        container.addLayer(layer)
      })
    }
  },

  beforeDestroy () {
    this.$layer.remove()
  },

  render () {}

}
