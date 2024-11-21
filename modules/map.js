import { addMarkers } from "./markers.js";
import { storesAmountContainer } from "./config.js";
import { changeZoomAndBounds } from "./changeZoom.js"

async function initMap(map, lat, lng, zoom, stores){
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.querySelector('#map'),{
    center: {
      lat,
      lng,
    },
    zoom,
    mapId: '125ad7ffc6402a94'
  });
  addMarkers(stores, map)
  changeZoomAndBounds(map, stores, storesAmountContainer)
}

export {initMap}