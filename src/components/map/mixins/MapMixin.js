////////////////////////////////////////////////////////////////
// Created by LUKASHENKO YEVHENII on 10.02.2018.
//
////////////////////////////////////////////////////////////////
import L from 'leaflet';
import SymbolGenerator from '../../../utils/SymbolGenerator';
export default {
  methods: {
    setMarker(symbosUrl, point){
      let marker = L.marker(point, {icon: L.icon({iconUrl: symbosUrl})}).addTo(this.map);
      this.$store.commit("addItem", marker);
      marker.on('click', this.markerClickHandler);
    },

    mapClickHandler(event){
      this.$store.commit('setMapPoint',event.latlng)
      let point = [event.latlng.lat, event.latlng.lng];
      this.setMarker(SymbolGenerator.createSymbol(), point);
    }
  },

  mounted: function () {
    this.map = L.map('map', {scrollWheelZoom: false}).setView([48.1859912, 36.2707655], 10);
    this.map.on('click', this.mapClickHandler);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  },
}
