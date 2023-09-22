let menuB = document.getElementById('burger');
let navMobile = document.querySelector('.navbar');
let mobileAnchors = document.querySelector('.MobileAnchors');

menuB.addEventListener('click', ()=>{
    if(menuB.checked){
        navMobile.classList.add("mobileNav");
        mobileAnchors.style.display = 'block'
    }else{
        navMobile.classList.remove("mobileNav")
        mobileAnchors.style.display = 'none'
    }
})