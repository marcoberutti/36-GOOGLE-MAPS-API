
import {initMap } from "./modules/map.js";
import { getStores } from "./modules/stores.js";
import { globalVar, stores, map, myCoords, storesAmountContainer } from "./modules/config.js";


async function initApp(){
  try {
    const storesData = await fetch('stores.json')
      .then(res => res.json())
      .then(data => data.stores)
      globalVar(storesData, map, myCoords)
      storesAmountContainer.textContent = stores.length
      initMap(map, myCoords.lat, myCoords.lng, myCoords.zoom, stores)
      getStores(stores, map)
  } catch (error) {
    console.log(error)
    /* TODO: UNA UI MIGLIORE PER QUESTO SOTTO */
    document.querySelector('#map').innerHTML = `
      <h1>...map not loaded correctly</h1>
    `
  }
}
initApp()

export { initApp }