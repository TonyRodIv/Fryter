const mainViewHome = document.getElementById('mainViewHome');
const mainViewTeam = document.getElementById('mainViewTeam');
const mainViewDoc = document.getElementById('mainViewDoc');
const checkPageHome = document.getElementById('checkPageHome');
const checkPageTeam = document.getElementById('checkPageTeam');
const checkPageDoc = document.getElementById('checkPageDoc');
let pageAnchorCheck = document.querySelectorAll('.pageAnchorCheck')

window.addEventListener('load', () => {
    checkPageHome.checked = true
});

checkPageHome.addEventListener('click', () => {
    console.log('Home')
    checkPageDoc.checked = false
    checkPageTeam.checked = false
    generateHome()
})
checkPageTeam.addEventListener('click', () => {
    console.log('Team')
    checkPageDoc.checked = false
    checkPageHome.checked = false
    generateTeam()
})
checkPageDoc.addEventListener('click', () => {
    console.log('Doc')
    checkPageHome.checked = false
    checkPageTeam.checked = false
    generateDoc()
})

function generateHome() {
    mainViewHome.style.display = 'flex'
    mainViewTeam.style.display = 'none'
    mainViewDoc.style.display = 'none'
    navMobile.classList.remove("mobileNav");
    mobileAnchors.style.display = 'none';
    menuB.checked = false;
}
function generateTeam() {
    mainViewTeam.style.display = 'flex'
    mainViewHome.style.display = 'none'
    mainViewDoc.style.display = 'none'
    navMobile.classList.remove("mobileNav");
    mobileAnchors.style.display = 'none';
    menuB.checked = false;
}
function generateDoc() {
    mainViewDoc.style.display = 'flex'
    mainViewTeam.style.display = 'none'
    mainViewHome.style.display = 'none'
    navMobile.classList.remove("mobileNav");
    mobileAnchors.style.display = 'none';
    menuB.checked = false;
}




