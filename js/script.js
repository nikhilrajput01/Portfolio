 // Navbar toggle
 function navToggle() {
  const button = document.getElementById('navbtn');
  const content = document.getElementById('navbarNav');
  button.addEventListener('click', () => {
    content.classList.toggle('show');
  });
}
navToggle();

// About Animation
let about = document.querySelector('.about-anima');

const scroll_div = () => {
  let windowH = window.innerHeight;
  let elementTop = about.getBoundingClientRect().top;

  if (elementTop < windowH && elementTop >= 0) {
    about.classList.add('about-anima'); 
  }
  else{
    about.classList.remove('about-anima'); 
  }
  console.log('Window Height:', windowH);
  console.log('Element Top:', elementTop);
  console.log('Condition:', elementTop < windowH - 100 && elementTop > 0);
};
window.addEventListener('scroll', scroll_div);

//About button
let aboutText=document.getElementsByClassName('about-para')[0];
let aboutbtn=document.getElementsByClassName('btn')[0];

aboutbtn.addEventListener('click',()=>{
  if (aboutText.style.display==='none' || aboutText.style.display==="") {
    aboutText.style.display="block"
    aboutbtn.textContent="read less..."
  } 
  else {
    aboutText.style.display="none"
    aboutbtn.textContent="read more..."
  }
})


// Project Animation
// let project = document.querySelector('#project');

// const project_scroll = () => {
//   let windowHeight = window.innerHeight; 
//   let elementTop = project.getBoundingClientRect().top; 

//   if (elementTop < windowHeight && elementTop > 0) {
//