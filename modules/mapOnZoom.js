import { addMarkersOnZoom } from "./markersOnZoom.js";
import { initApp } from "../script.js"; 

async function initMapOnZoom(map, lat, lng, zoom, store, stores){
  let buttonContainer = document.querySelector('#categoryButtonsContainer')
  if(buttonContainer.children.length === 4){
    let button = document.createElement('button')
    button.classList.add('zoomBtn')
    button.textContent = 'Remove zoom'
    buttonContainer.append(button)
    button.addEventListener('click', async function(){
      initApp()
      button.remove()
    })
  }

  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.querySelector('#map'),{
    center: {
      lat,
      lng,
    },
    zoom,
    mapId: '125ad7ffc6402a94'
  });
  addMarkersOnZoom(store, map)
}

export {initMapOnZoom}