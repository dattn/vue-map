export default {
  props: {
    pathStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  watch: {
    pathStyle (pathStyle) {
      this.$path.setStyle(pathStyle)
    }
  },

  mounted () {
    // passthru events
    const mapEvents = [
      'click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu',
      'add', 'remove', 'popupopen', 'popupclose'
    ]
    mapEvents.forEach(eventName => this.$path.on(eventName, ev => this.$emit(eventName, ev)))
  }
}
