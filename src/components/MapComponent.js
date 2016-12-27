import Vue from 'vue'

export default Vue.extend({

  created () {
    this.$map = null
    this.$parent.$on('map-ready', data => {
      this.$map = data.map
      this.$emit('map-ready', data)
    })
  }

})
