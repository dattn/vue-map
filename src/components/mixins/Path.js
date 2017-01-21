import Leaflet from 'leaflet'
import Layer from './Layer'

let defaultOptions = Leaflet.Path.prototype.options
const styleProps = {
  stroke: {
    type: Boolean,
    default: defaultOptions.stroke
  },
  color: {
    type: String,
    default: defaultOptions.color
  },
  weight: {
    type: Number,
    default: defaultOptions.weight
  },
  opacity: {
    type: Number,
    default: defaultOptions.opacity
  },
  lineCap: {
    type: String,
    default: defaultOptions.lineCap
  },
  lineJoin: {
    type: String,
    default: defaultOptions.lineJoin
  },
  dashArray: {
    type: String,
    default: defaultOptions.dashArray
  },
  fill: {
    type: Boolean,
    default: defaultOptions.fill
  },
  fillColor: {
    type: String,
    default: defaultOptions.fillColor
  },
  fillOpacity: {
    type: Number,
    default: defaultOptions.fillOpacity
  },
  fillRule: {
    type: String,
    default: defaultOptions.fillRule
  }
}

const mapEvents = [
  'click',
  'dblclick',
  'mousedown',
  'mouseover',
  'mouseout',
  'contextmenu',
  'add',
  'remove',
  'popupopen',
  'popupclose'
]

export default {

  mixins: [ Layer ],

  props: {
    ...styleProps
  },

  beforeCreate () {
    this.$setPath = path => {
      this.$path = path
      this.$setLayer(path)
    }
  },

  computed: {
    pathStyle () {
      var pathStyle = {}
      for (let prop in styleProps) {
        pathStyle[prop] = this[prop]
      }
      return pathStyle
    }
  },

  mounted () {
    // init events
    mapEvents.forEach(eventName => this.$path.on(eventName, ev => this.$emit(eventName, ev)))

    // whatch style props
    for (let prop in styleProps) {
      this.$watch(prop, (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.$path.setStyle({
            [prop]: newValue
          })
        }
      })
    }
  }

}
