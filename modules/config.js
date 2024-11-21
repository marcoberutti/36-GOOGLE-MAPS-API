let stores = []
let markers = []
let map;
let storesAmountContainer = document.querySelector('#storesAmountContainer')
let storeContainer = document.querySelector('#storesList')
let myCoords = {
  lat: 43, 
  lng: 12,
  zoom: 6
}
function globalVar(storesData, mapInstance, coordinates){
  stores = storesData;
  map = mapInstance;
  myCoords = coordinates || myCoords; 
}

export {globalVar, stores, map, myCoords, markers, storesAmountContainer, storeContainer}