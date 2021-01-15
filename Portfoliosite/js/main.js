
/*============================================
              NAVIGATION MENU
 ============================================== */
 (() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
       navMenu.classList.add("open");
       bodyScrollingToggle();
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    // attach and event handler to document
    document.addEventListener("click", (event)=>{
        if(event.target.classList.contains('link-item')){
            /* make sure event.target.hash has a variable before 
            overridding default behavior*/
            if(event.target.hash !==""){
                // prevent default anchor click behaviour
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // activate new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // activate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");

                // if clicked item 'link-item' is contained withing the navigation menu
                if(navMenu.classList.contains("open")){
                // activate new navigation menu 'link-item'
                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");
                // hide navigation menu
                hideNavMenu();
            }
            else{
                let navItems = navMenu.querySelectorAll(".link-item");
                navItems.forEach((item) =>{
                    if(hash === item.hash){
                        // activate new navigation menu 'link-item'
                        item.classList.add("active","inner-shadow");
                        item.classList.remove("outer-shadow","hover-in-shadow");
                    }
                })
                fadeOutEffect();
            }
            // add hash (#) to url
            window.location.hash = hash;
        }
      }
    })

 })();

/*---------------------- portfolio filter -------------------*/

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");

    /* filter portfolio items*/
    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            // deactivate existing active 'filter-item'
            filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // activate new 'filter item'
            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) => {
                if(target === item.getAttribute(" data-category") || target === 'all'){ 
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })

})();


/*===================================
hide all sections except active
========================================*/
// (() =>{
//     const sections = document.querySelectorAll(".section");
//     sections.forEach((section) => {
//         if(!section.classList.contains("active")){
//             section.classList.add("hide");
//         }
//     })

// })(); 
/* (); is immediatly invoked function expression*/ 
