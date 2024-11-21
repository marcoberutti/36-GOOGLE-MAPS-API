import { bindInfoWindowOnZoom } from "./infoWindowOnZoom.js";

let markers = []

async function addMarkersOnZoom(store, map){
  const { AdvancedMarkerElement,pinElement } = await google.maps.importLibrary("marker");
  let negozio = store
    let marker = new AdvancedMarkerElement({
      position: negozio.coords,
      map: map,
      title: 'Clicca per maggiori info'
    });
    bindInfoWindowOnZoom(marker, negozio, map)
    markers.push(marker)
  const clusterOptions = {
    imagePath: "../cat.jpg",
    gridSize: 300,
    zoomOnClick: false,
    maxZoom: 10000,
  };
  new markerClusterer.MarkerClusterer({ markers, map, imagePath: "../cat.jpg" })
}

export {addMarkersOnZoom}