export default {

  beforeCreate () {
    this.$containerReady = new Promise(resolve => {
      this.$setContainer = container => {
        if (!container.addLayer) {
          throw new Error('A LayerContainer component needs an addLayer method')
        }
        this.$container = container
        resolve(container)
      }
    })
  }

}
