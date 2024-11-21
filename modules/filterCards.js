import { insertStore } from "./stores.js"
import { storeContainer } from "./config.js"

export function filterCards(stores){
  let categoria = null;
  let nome = null;
  let button = document.querySelector('#categoryButtonsContainer')
  button.addEventListener('click', function(e){
    if(e.target.nodeName === 'BUTTON'){
      categoria = e.target.attributes[0].nodeValue
      let selectedBtn = e.target
      let buttons = document.querySelectorAll('#categoryButtonsContainer button')
      buttons.forEach(btn => btn.classList.remove('active'))
      selectedBtn.classList.add('active')
      filterStore(stores, categoria, nome)
    }
  })
  /* TODO sistemare che all input, gli spazi generano errori */
  /* TODO sistemare tutto on input */
  let input = document.querySelector('#searchContainer input')
  input.addEventListener('input', function(e){
    nome = e.target.value;
    filterStore(stores, categoria, nome)
  })
  function filterStore(stores, categoria = null, nome = null){
    let filteredStores = stores;
    if(categoria && categoria !== 'all'){
      filteredStores = stores.filter(store => store.categories.includes(categoria))
    } 
    if(nome){
      filteredStores = nome
      ? stores.filter(store => store.name.toLowerCase().includes(nome))
      : stores
    }
    storeContainer.innerHTML = '';
    filteredStores.forEach(store => {
    insertStore(store)
    });
    // addMarkers(filteredStores, map)
    /* TODO: se filtro i dati, togliere e aggiungere i markers dalla mappa */
  }
}