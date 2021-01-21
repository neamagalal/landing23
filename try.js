//Dynamic navbar
const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
function createNav(){
for (let item of sections){
let section = document.createElement("li");
section.className = "menu__link";
section.dataset.nav = item.id;
section.innerText = item.dataset.nav;
navbarMenu.appendChild(section);
//scroll from navbar to section
section.addEventListener('click',function () {
	item.scrollIntoView({behavior:"smooth"});
});

};};
createNav();

//fixed navbar
window.addEventListener('scroll', event => { 
    let nav = document.querySelector('nav'); 
    
    (window.scrollY >= 50) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});




//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll(' ul li ');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelectorAll(section);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
