import { getStores } from "./stores.js";
import { animateDropdown } from "./dropdown.js"

export function changeZoomAndBounds(map, stores, storesAmountContainer){
  map.addListener('zoom_changed', () => {
    const center = map.getBounds(); // Ottieni il centro attuale della mappa
    let storesInZoom = []
    for(let i = 0; i<stores.length; i ++){
      if(stores[i].coords.lat > center.ei.lo 
        && stores[i].coords.lat < center.ei.hi 
        && stores[i].coords.lng > center.Gh.lo
        && stores[i].coords.lng < center.Gh.hi){
          storesInZoom.push(stores[i])
      }
    }
    getStores(storesInZoom)
    storesAmountContainer.textContent = storesInZoom.length
  });
  map.addListener('bounds_changed', () => {
    const center = map.getBounds(); // Ottieni il centro attuale della mappa
    let storesInZoom = []
    for(let i = 0; i<stores.length; i ++){
      if(stores[i].coords.lat > center.ei.lo 
        && stores[i].coords.lat < center.ei.hi 
        && stores[i].coords.lng > center.Gh.lo
        && stores[i].coords.lng < center.Gh.hi){
          storesInZoom.push(stores[i])
        }
      storesAmountContainer.textContent = storesInZoom.length
    }
  getStores(storesInZoom)
  animateDropdown(storesInZoom)
  });
}