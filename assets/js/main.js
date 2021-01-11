/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== SHOW AND REMOVE ACTIVE MENU
        REMOVE SIDE MENU ON MOBILE/TABLET VIEW =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== HEADER HIDE and SHOW WHEN SCROLLING =====*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0';
        // document.getElementById('nav-list').style.top = '0';
    } else {
        document.getElementById('header').style.top = '-100%';
        // document.getElementById('nav-list').style.top = '-100%';
       
    }
    prevScrollpos = currentScrollPos;
}


/*===== OPENING TAB IN WORK SECTION =====*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabcontent.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }

  /*===== SIDE NAVIGATION BUTTONS =====*/
  const allItems = document.querySelectorAll('.side__content ul li a');
        
  allItems.forEach(item => {
      item.addEventListener('click', function(e) {
          //remove previous active classes
          for (var i=0; i<allItems.length; i++) {
              allItems[i].classList.remove('active');
          }
          this.classList.add('active');
      });
  })






//Change navigation style on scroll
window.addEventListener('scroll', event => { 
    let nav = document.querySelector('.header__area'); 
    
    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
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

