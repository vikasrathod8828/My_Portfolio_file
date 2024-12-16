/**toggle icon navbar**/
let menu_icon = document.querySelector('#menu-item');
let navbar = document.querySelector('.navbar');

menu_icon.onclick = () =>{
    menu_icon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
/** scroll section active each link**/

let  sections = document.querySelectorAll('section');
let  navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(op >= offset && top <offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            });
        };
    })  ;
    /*Sticky navbar */

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);


/*to remove the toggle btn  when navbar click */

menu_icon.classList.remove('bx-x');
navbar.classList.remove('active');
};


/*scroll reveal*/
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin :'top' });

ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin :'bottom' });


/*multiple text */

const typed =new typed('multiple-text',{
    String:['Frontend Developer','Student'],
    typeSpeed :100,
    backSpeed:100,
    backdelay:1000,
    loop:true

});