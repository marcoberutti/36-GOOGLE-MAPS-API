import { initMapOnZoom } from "./mapOnZoom.js";
import { filterCards } from "./filterCards.js";
import { storeContainer } from "./config.js"

function getStores(stores){
  stores.forEach(store => {
    insertStore(store, stores)
  })
  filterCards(stores, storeContainer)
}
export  function insertStore(store, stores){
  let storeCard = document.createElement('div')
  storeCard.classList.add('storeCard')
  storeCard.innerHTML = `
    <h3>${store.name}</h3>
    <p>${store.email}</p>
    <p>${store.address}</p>
    <p>${store.openings}</p>
    <p>${store.categories}</p>
    <a href="https://www.google.com/maps?saddr=My+Location&daddr=${store.coords.lat},${store.coords.lng}" target="_blank"">directions</a>
  `
  storeCard.addEventListener('click', function () {
    let cardTitle = this.children[0].innerText;
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].name === cardTitle) {
        let lat = stores[i].coords.lat;
        let lng = stores[i].coords.lng;
        let zoom = 10;
        initMapOnZoom(map, lat, lng, zoom, stores[i], stores);
      }
    }
  });
  storeContainer.append(storeCard)
}

export { getStores }