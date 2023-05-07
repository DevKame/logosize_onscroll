"use strict";

let logo = document.querySelector("img");

let nav = document.querySelector("nav");
let nav_height = nav.clientHeight;
let nav_width = nav.clientWidth;

//determines on what point the logo changes. here it changes when nav´s top is twice its height from top:
let switching_point = nav_height * 2;

window.addEventListener("scroll", () => {
    console.clear();
    //every scroll changes the top value of nav
    let nav_top = nav.getBoundingClientRect(nav).top;
    console.log("scroll_y:", scrollY);
    console.log("switching_point:", switching_point);
    console.log("nav_top:", nav_top);
    console.log("nav_height:", nav_height);
    console.log("nav_width:", nav_width);

    //when logo is big, make it small...
    if(nav_top <= switching_point)
    {
        logo.classList.remove("big");
        logo.classList.add("small");
    }
    //and vice versa
    else {
        logo.classList.remove("small");
        logo.classList.add("big");
    }
    
});