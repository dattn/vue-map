<template>
  <div>
    <vue-map :position="position" :zoom="zoom" @zoom="onZoom" @move="onMove">
      <vue-marker v-for="markerPosition in markers" :position="markerPosition"></vue-marker>
      <vue-layer-group>
        <vue-geo-json :data="geoJson" :feature-style="geoJsonStyle"></vue-geo-json>
        <vue-circle :position="{lat: 49.614, lng: 6.084}" :radius="1000" :stroke="true" color="#990"></vue-circle>
      </vue-layer-group>
    </vue-map>
    <fieldset>
      <legend>Map</legend>
      <div>
        Latitude: <input type="number" step="any" v-model="lat" />
        Longitude: <input type="number" step="any" v-model="lng" />
        <button @click="addMarkerAtMapPosition">Add Marker</button>
      </div>
      <div>
        Zoom:
        <input type="number" step="any" v-model="zoom" />
      </div>
    </fieldset>
    <fieldset>
      <legend>Markers</legend>
      <div v-for="(marker, index) in markers">
        Latitude: <input type="number" step="any" :value="marker.lat" @input="updateMarkerLat(index, $event)" />
        Longitude: <input type="number" step="any" :value="marker.lng" @input="updateMarkerLng(index, $event)" />
        <button @click="removeMarker(index)">Remove</button>
      </div>
      <div>
        Latitude: <input type="number" step="any" v-model="newMarker.lat" />
        Longitude: <input type="number" step="any" v-model="newMarker.lng" />
        <button @click="addMarker">Add</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import VueMap from './components/Map'
import VueMarker from './components/Marker'
import VueGeoJson from './components/GeoJson'
import VueCircle from './components/Circle'
import VueLayerGroup from './components/LayerGroup'

export default {
  name: 'app',
  components: {
    VueMap, VueMarker, VueGeoJson, VueCircle, VueLayerGroup
  },
  data () {
    return {
      lat: 49.611,
      lng: 6.13,
      zoom: 13,
      markers: [
        { lat: 49.611, lng: 6.13 },
        { lat: 49.62, lng: 6.118 }
      ],
      newMarker: { lat: '', lng: '' },
      geoJson: {
        type: 'Polygon',
        coordinates: [
          [
            [
              6.114921569824219,
              49.612378400270195
            ],
            [
              6.125907897949219,
              49.618495606374275
            ],
            [
              6.139812469482421,
              49.617272226578514
            ],
            [
              6.141357421875,
              49.61148856087291
            ],
            [
              6.14032745361328,
              49.60626042633693
            ],
            [
              6.126594543457031,
              49.60247802203419
            ],
            [
              6.113376617431641,
              49.60715036117516
            ],
            [
              6.114921569824219,
              49.612378400270195
            ]
          ]
        ]
      },
      geoJsonStyle: function () {
        return {
          color: '#933'
        }
      }
    }
  },
  computed: {
    position () {
      return {
        lat: this.lat,
        lng: this.lng
      }
    }
  },
  methods: {
    onZoom (data) {
      this.zoom = data.zoom
    },

    onMove (data) {
      this.lat = data.position.lat
      this.lng = data.position.lng
    },

    removeMarker (index) {
      this.markers.splice(index, 1)
    },

    addMarker () {
      this.markers.push(this.newMarker)
      this.newMarker = { lat: '', lng: '' }
    },

    addMarkerAtMapPosition () {
      this.markers.push({
        lat: this.lat,
        lng: this.lng
      })
    },

    updateMarkerLat (index, event) {
      this.markers.splice(index, 1, {
        ...this.markers[index],
        lat: event.target.value
      })
    },

    updateMarkerLng (index, event) {
      this.markers.splice(index, 1, {
        ...this.markers[index],
        lng: event.target.value
      })
    }
  }
}
</script>
