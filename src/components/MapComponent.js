import Vue from 'vue'

export default Vue.extend({

  created () {
    if (!this.$parent.$mapReady) {
      throw new Error('MapComponent must be child of Map')
    }
    this.$parent.$mapReady.then(map => {
      this.$map = map
    })
    this.$mapReady = new Promise(resolve => {
      this.$parent.$mapReady.then(resolve)
    })
  }

})
