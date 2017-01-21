export default {

  beforeCreate () {
    this.$containerReady = new Promise(resolve => {
      this.$setContainer = container => {
        this.$container = container
        resolve(container)
      }
    })
  }

}
