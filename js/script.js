
function navtogglebtn() {
    let button =document.getElementById('navbtn')
    let content =document.getElementById('navbarNav')
    
    button.addEventListener('click',()=>{
      if (content.style.display==='none' || content.style.display==='') {
        content.style.display="block"
      } 
      else {
        content.style.display="none"
      }
      
    })
  }
  navtogglebtn()