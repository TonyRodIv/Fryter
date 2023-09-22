let menuB = document.getElementById('burger');
let scrollTop = document.getElementById('scrollTop');
let scrollBtn = document.getElementById('scrollBtn');
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
scrollBtn.addEventListener('click', ()=> {
    let screenWidth = window.innerWidth;
    let intro = document.getElementById('intro');
    let intro2 = document.getElementById('intro2');
    if(screenWidth<800){
        console.log('mobile?')
        intro2.scrollIntoView({ behavior: "smooth"});
    }else{
        console.log('pc?')
        intro.scrollIntoView({ behavior: "smooth"});
    }
  });

  scrollTop.addEventListener('click',()=>{
    window.scrollTo(0, 0, { behavior: "smooth" });
  })