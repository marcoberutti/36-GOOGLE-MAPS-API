let activeInfoWindow = null;

function bindInfoWindowOnZoom(marker, negozio, map){
  let infoWindowContent = `
    <h3>${negozio.name}</h3>
    <p>${negozio.address}</p>
    <div>${negozio.openings}</div>
    <a href="https://www.google.com/maps?saddr=My+Location&daddr=${negozio.coords.lat},${negozio.coords.lng}" target="_blank">Directions</a>
    `
  let infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
    ariaLabel: 'la mia azienda'
  })

  if(activeInfoWindow){
    activeInfoWindow.close();
  }
  infoWindow.open({
    anchor: marker,
    map,
  });
  activeInfoWindow = infoWindow
}

export {bindInfoWindowOnZoom}