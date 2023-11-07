
const navBtn=document.querySelector(".nav__btn")
const navBtnopen=document.querySelector(".nav-menu--open")

let navOpen=false;
navBtn.addEventListener("click",function(){
    if(navOpen){
    navBtn.classList.remove("nav__btn--open")
    navBtnopen.classList.remove("nav-menu--open")

    navOpen=false;
    }
    else{
        navBtn.classList.add("nav__btn--open")
        navBtnopen.classList.add("nav-menu--open")

        navOpen=true;

    }
})