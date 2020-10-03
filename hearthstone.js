window.addEventListener("DOMContentLoaded", function(event) {
    // MOBILE TRIGGER FOR OPENING MENU
    
    let mobileTrigger = document.querySelector(".fa-bars");
    mobileTrigger.addEventListener("click", extend);
    function extend() {
        let linkMobile = document.querySelector(".linkMobile");
        let expandMobileMenu = document.querySelector(".linkMobile ul");

        linkMobile.classList.toggle("expandMobileMenu");

        if (linkMobile.classList.contains("expandMobileMenu")) {
            expandMobileMenu.style.display = "block";
            linkMobile.style.color = "#fff";
        }
        else {
            expandMobileMenu.style.display = "none";
        }
        
    }
})