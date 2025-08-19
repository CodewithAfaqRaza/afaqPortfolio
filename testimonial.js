let parent = document.querySelector(".testimonial__images");
let reviewName = document.getElementById("name");
let reviewPost = document.getElementById("post");
let reviewDesc = document.getElementById("description");
let reviewImage = document.querySelectorAll(".reviewImage");
let navigationBack = document.querySelector(".nav__back");
let navigationNext = document.querySelector(".nav__next");

let person1 = {
    name : "Sarah johnson",
    post : "Market Manager",
    description : "it is highly scalable! I essentially have a completely functional and adjustable design system today",
}
let person2 = {
    name : "Dean Krish",
    post : "Manager",
    description : "it is highly scalable! I essentially have a completely functional and adjustable design system today",
}
let person3 = {
    name : "David Lee",
    post : "Creative Director",
    description : "it is highly scalable! I essentially have a completely functional and adjustable design system today",
}
let data = [person1, person2, person3];

        reviewName.innerHTML = data[0].name;
        reviewPost.innerHTML = data[0].post;
        reviewDesc.innerHTML = data[0].description;

let nextImage = function(){
        let activeEl = document.querySelector(".activePic");
        let previousEl = document.querySelector(".prevPic");
        let nextEl = document.querySelector(".nextPic");
        nextEl.classList.remove("nextPic");
        nextEl.classList.add("activePic");
        activeEl.classList.remove("activePic");
        activeEl.classList.add("prevPic");
        previousEl.classList.remove("prevPic");
        previousEl.classList.add("nextPic");
}

let previousImage = function(){
        let activeEl = document.querySelector(".activePic");
        let previousEl = document.querySelector(".prevPic");
        let nextEl = document.querySelector(".nextPic");
        nextEl.classList.remove("nextPic");
        nextEl.classList.add("prevPic");
        activeEl.classList.remove("activePic");
        activeEl.classList.add("nextPic");
        previousEl.classList.remove("prevPic");
        previousEl.classList.add("activePic");
}

let changeText = function(){
    reviewImage.forEach(function(e, idx){
        if(e.classList.contains("nextPic")){
            reviewName.innerHTML = data[idx].name;
            reviewPost.innerHTML = data[idx].post;
            reviewDesc.innerHTML = data[idx].description;
        }
    });
}

// button code
navigationBack.addEventListener("click", function(e){
    previousImage();
    reviewImage.forEach(function(e, idx){
        if(e.classList.contains("activePic")){
            reviewName.innerHTML = data[idx].name;
            reviewPost.innerHTML = data[idx].post;
            reviewDesc.innerHTML = data[idx].description;
            console.log(idx);
        }
    });
})
navigationNext.addEventListener("click", function(e){
    nextImage();
    reviewImage.forEach(function(e, idx){
        if(e.classList.contains("activePic")){
            reviewName.innerHTML = data[idx].name;
            reviewPost.innerHTML = data[idx].post;
            reviewDesc.innerHTML = data[idx].description;
            console.log(idx);
        }
    });
})

// image code
parent.addEventListener("click", function(e) {
    changeText();
    if (e.target.classList.contains("nextPic")){
        nextImage();
    }
    else if(e.target.classList.contains("prevPic")){
        previousImage();
    }
});
