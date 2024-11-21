export function animateDropdown(storesInZoom){
  storesAmountContainer.addEventListener('mouseenter', function(){
    let storesDropdown = document.querySelector('#storesDropdown')
    storesDropdown.innerHTML = ''
    if(storesDropdown.children.length === 0){
      for(let i = 0; i< storesInZoom.length; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.textContent = `${storesInZoom[i].name}`
        a.setAttribute('href', `https://www.google.com/maps?saddr=My+Location&daddr=${storesInZoom[i].coords.lat},${storesInZoom[i].coords.lng}`)
        a.setAttribute('target', "_blank")
        li.append(a)
        storesDropdown.append(li)
        storesDropdown.style.display = 'block'
        storesDropdown.addEventListener('mouseleave', function(){
          storesDropdown.style.display = 'none'
        })
        a.addEventListener('mouseenter', function(e){
          if(e.target.childNodes.length <= 1){
            let span = document.createElement('span')
            span.classList = 'go'
            span.textContent = 'go!'
            li.append(span)
          }
        })
        a.addEventListener('mouseleave', function(e){
          let span = e.target.nextElementSibling
          span.remove()
        })
      }    
    }
  })
}