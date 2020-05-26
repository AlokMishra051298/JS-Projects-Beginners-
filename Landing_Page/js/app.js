/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
let navList = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function setElementAttributes(element, attribute, value) {
    element.setAttribute(attribute, value);
}

function isInViewport(sec) {
    var bounding = sec.getBoundingClientRect();
    return (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || documemt.documetElement.clientHeight) && bounding.width <= (window.innerWidth || documemt.documetElement.clientWidth));
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavbar(sections) {
    for (let sec of sections) {
        var heading = sec.querySelector("h2");
        var list = document.createElement('li');
        var a = document.createElement('a');
        setElementAttributes(a, "href", '#' + sec.getAttribute("id"));
        setElementAttributes(a, "class", "menu__link");
        a.innerHTML = heading.innerHTML;
        list.appendChild(a);
        navList.appendChild(list);
    }
}

function linkToActive(links, id){
    links.forEach(link => {
        var ref = (link.href.split("#"))[1];
        if(id===ref){
            link.classList.add("active__nav");
        }
        else{
            link.classList.remove("active__nav");
        }
    });
}

// ----------------------------
function scrollToUp(){
    let btn = document.querySelector(".scroll__up");
    let main = document.querySelector("main").getBoundingClientRect();
    if(main.top<=0){
        // console.log("I'm in");
        btn.classList.add("show__btn");
    }
    else{
        btn.classList.remove("show__btn");
    }
    btn.addEventListener("click", event =>{
        event.preventDefault();
        window.scrollTo({
            behavior:'smooth',
            left:0,
            top: 0
        });//window
    }
);//event Listener
}


// Add class 'active' to section when near top of viewport
function setSectionAsActive(sections){
    var links = document.querySelectorAll('.menu__link')
    for (let sec of sections) {
      window.addEventListener('scroll', function (event) {
              // if(sec.getAttribute('id')===ref && isInViewport(sec)){
          if(isInViewport(sec)){
              sec.classList.add("your-active-class");
              linkToActive(links, sec.getAttribute('id'));
          }
          else {
              sec.classList.remove("your-active-class");
          }
          scrollToUp();
      }, false);
    }
    // scrollToUp();
}
// Scroll to anchor ID using scrollTO event
function smoothScroll() {
    document.querySelectorAll('.menu__link').forEach(item => {
        item.addEventListener('click', event => {
            //     set active to clicked nav item
            //  scroll
            // console.log((item.href.split("#"))[1]);
            var ref = "#" + (item.href.split("#"))[1];
            event.preventDefault();
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                // top gets the distance from the top of the page of our target element
                top: document.querySelector(ref).offsetTop
            });
        })
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavbar(sections);

// Scroll to section on link click
smoothScroll();
// Set sections as active
setSectionAsActive(sections);

//------------------EXTRA WORK------------
/**
If you want to only section attached with clicked navbar item looks different then follow this:


function addListenersToBtn(sections){
  document.querySelectorAll('.menu__link').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    for (var section of sections){      if(section.querySelector("h2").textContent===item.textContent){

        section.setAttribute("class","your-active-class");
      }
      else{
        section.classList.remove("your-active-class");
      }
    }
  })
})
}**/
