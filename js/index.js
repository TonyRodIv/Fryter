let menuB = document.getElementById('burger');
let scrollTop = document.querySelectorAll('.scrollTop');
let windowTop = document.getElementById('windowTop');
let scrollBtn = document.getElementById('scrollBtn');
let navMobile = document.querySelector('.navbar');
let mobileAnchors = document.querySelector('.MobileAnchors');

window.addEventListener('load', () => {
    // checkPageHome.checked = true
    generateTeam()
});
menuB.addEventListener('click', () => {
    if (menuB.checked) {
        navMobile.classList.add("mobileNav");
        mobileAnchors.style.display = 'block'
    } else {
        navMobile.classList.remove("mobileNav");
        mobileAnchors.style.display = 'none';
    }
})
scrollBtn.addEventListener('click', () => {
    let screenWidth = window.innerWidth;
    let intro = document.getElementById('intro');
    let intro2 = document.getElementById('intro2');
    if (screenWidth < 800) {
        console.log('mobile scroll')
        intro2.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log('pc scroll')
        intro.scrollIntoView({ behavior: "smooth" });
    }
});
for (const btn of scrollTop) {
    btn.addEventListener("click", function () {
        windowTop.scrollIntoView({ behavior: "smooth" });
        navMobile.classList.remove("mobileNav");
        mobileAnchors.style.display = 'none';
        menuB.checked = false;
    });
}