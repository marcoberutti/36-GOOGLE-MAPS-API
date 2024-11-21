import { bindInfoWindow } from "./infoWindow.js";
import { markers } from "./config.js";

async function addMarkers(stores, map){
  const { AdvancedMarkerElement,pinElement } = await google.maps.importLibrary("marker");
  let negozi = stores
  negozi.forEach(negozio => {
    let marker = new AdvancedMarkerElement({
      position: negozio.coords,
      map: map,
      title: 'Clicca per maggiori info'
    });
    bindInfoWindow(marker, negozio, map)
    markers.push(marker)
  });

  const clusterOptions = {
    imagePath: "../cat.jpg",
    gridSize: 300,
    zoomOnClick: false,
    maxZoom: 10000,
  };
  new markerClusterer.MarkerClusterer({ markers, map, imagePath: "../cat.jpg" })
}

export {addMarkers}