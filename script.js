let humburger = document.querySelector(".nav__humburger");
let menu = document.querySelector(".menu");
let html = document.querySelector("html")
let menuButtons = document.querySelectorAll("#menu_buttons");

humburger.addEventListener("click", function(){
    if(humburger.firstElementChild.classList.contains("humburger__top")){
        humburger.firstElementChild.classList.remove("humburger__top");
        humburger.lastElementChild.classList.remove("humburger__bottom");
        menu.classList.add("hidden");
        menu.style.opacity = 0;
    } else{
        humburger.firstElementChild.classList.add("humburger__top");
        humburger.lastElementChild.classList.add("humburger__bottom");
        menu.classList.remove("hidden");
        menu.style.opacity = 1;
    }
});

function themeChange(e){
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        html.classList.add("light");
        e.firstElementChild.classList.add("invisible");
        e.lastElementChild.classList.remove("invisible");
    }else {
        html.classList.add("dark");
        html.classList.remove("light");
        e.firstElementChild.classList.remove("invisible");
        e.lastElementChild.classList.add("invisible");
    }
}
menuButtons.forEach(function(e){
    e.addEventListener("click", function(){
        menuButtons.forEach(function(el){
            el.classList.remove("icon-shadow");
            el.style.color = "var(--color-tertiary)";
            el.firstElementChild.style.fill = "var(--color-tertiary)";
        });
        e.classList.add("icon-shadow");
        e.style.color = "var(--color-secondary)";
        e.firstElementChild.style.fill = "var(--color-secondary)";
    })
})