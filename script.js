let humburger = document.querySelector(".nav__humburger");
let menu = document.querySelector(".menu");
let html = document.querySelector("html")
let menuButtons = document.querySelectorAll("#menu_buttons");
let menuButton = document.querySelectorAll("#menu_button");
let pages = document.querySelectorAll("main");

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

// Pagination
let changePage = function(page){
    pages.forEach(function(el){
        if(el.id == page.innerText){
            el.classList.remove("hidden");
            el.classList.add("load");
        }else {
            el.classList.add("hidden")
            el.classList.remove("load");
        }
        if(!el.classList.contains("hidden")){
            menuButtons.forEach(function(elem){
                elem.classList.remove("main-icon");
                elem.style.color = "var(--color-tertiary)";
                elem.firstElementChild.style.fill = "var(--color-tertiary)";
            });
            menuButtons.forEach(function(e){
                if(e.lastElementChild.textContent == el.id){
                    e.classList.add("main-icon");
                    e.style.color = "var(--color-body-text)";
                    e.firstElementChild.style.fill = "var(--color-secondary)";
                }
            })
        }
    })
}
menuButtons.forEach(function(e){
    e.addEventListener("click", function(){
        changePage(e);
    })
});
menuButton.forEach(function(e){
    e.addEventListener("click", function(){
        changePage(e);
        humburger.firstElementChild.classList.remove("humburger__top");
        humburger.lastElementChild.classList.remove("humburger__bottom");
        menu.classList.add("hidden");
        menu.style.opacity = 0;

    })
});
let neutralize = function(){
    menuButtons.forEach(function(elem){
        elem.classList.remove("main-icon");
        elem.style.color = "var(--color-tertiary)";
        elem.firstElementChild.style.fill = "var(--color-tertiary)";
    });
    pages.forEach(function(page){
        page.classList.add("hidden");
        page.classList.remove("load")
    })
}
let openService = function(){
    neutralize();
    let e = menuButtons[3];
    e.classList.add("main-icon");
    e.style.color = "var(--color-body-text)";
    e.firstElementChild.style.fill = "var(--color-secondary)";
    pages[3].classList.remove("hidden");
    pages[3].classList.add("load")
}
let openContact = function(){
    neutralize();
    let e = menuButtons[5];
    e.classList.add("main-icon");
    e.style.color = "var(--color-body-text)";
    e.firstElementChild.style.fill = "var(--color-secondary)";
    pages[5].classList.remove("hidden");
    pages[5].classList.add("load")
}
let openProject = function(){
    neutralize();
    let e = menuButtons[2];
    e.classList.add("main-icon");
    e.style.color = "var(--color-body-text)";
    e.firstElementChild.style.fill = "var(--color-secondary)";
    pages[2].classList.remove("hidden");
    pages[2].classList.add("load")
}
let openAbout = function(){
    neutralize();
    let e = menuButtons[1];
    e.classList.add("main-icon");
    e.style.color = "var(--color-body-text)";
    e.firstElementChild.style.fill = "var(--color-secondary)";
    pages[1].classList.remove("hidden");
    pages[1].classList.add("load")
}