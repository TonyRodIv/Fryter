const mainView = document.getElementById('mainView');
const checkPageHome = document.getElementById('checkPageHome');
const checkPageTeam = document.getElementById('checkPageTeam');
const checkPageDoc = document.getElementById('checkPageDoc');
let pageAnchorCheck = document.querySelectorAll('.pageAnchorCheck')

window.addEventListener('load', () => {
    checkPageHome.checked = true
});

// for (const pageAnchorCheckers of pageAnchorCheck) {
//     pageAnchorCheckers.addEventListener('click', () => {
//         if (checkPageHome.checked) {
//             console.log('Home')
//             checkPageDoc.checked = false
//             checkPageTeam.checked = false
//         } else if (checkPageDoc.checked) {
//             console.log('Doc')
//             checkPageHome.checked = false
//             checkPageTeam.checked = false
//         } else if (checkPageTeam.checked) {
//             console.log('Team')
//             checkPageDoc.checked = false
//             checkPageHome.checked = false
//         }
//     })
// }

checkPageHome.addEventListener('click', () => {
    console.log('Home')
    checkPageDoc.checked = false
    checkPageTeam.checked = false
})
checkPageTeam.addEventListener('click', () => {
    console.log('Team')
    checkPageDoc.checked = false
    checkPageHome.checked = false
})
checkPageDoc.addEventListener('click', () => {
    console.log('Doc')
    checkPageHome.checked = false
    checkPageTeam.checked = false
})






