const mainView = document.getElementById('mainView');
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

function generateHome(){
    mainView.innerHTML = `
    <header class="header">
            <p class="titleH textH">Você já pensou o quanto o descarte Incorreto do óleo polui o meio ambiente?</p>
            <p class="description textH">
                De acordo com os dados da Associação Brasileira das Indústrias de Óleo (Abiove), <strong>o Brasil produz
                    mais de 3 bilhões de litros de óleos vegetais por ano</strong>, e o descarte inadequado de 1 litro
                desse óleo pode <strong>contaminar até 25 mil litros de água.</strong>
            </p>
            <button class="btnH" id="scrollBtn" style="cursor: pointer;">Saiba Mais</button>
            <div class="scroll" id="intro"></div>
        </header>
        <section class="secIntro mT" id="intro2">
            <img src="./assets/img/OilWater.png" class="secImg" alt="" srcset="">
            <figure class="secParagraphTitle">
                <p class="secTitleH secTextH">Introdução</p>
                <p class="secDescription secTextH">
                    Apesar da atual preocupação com o meio ambiente, diariamente ocorre o descarte de óleo de origem
                    vegetal ou animal proveniente de frituras, tanto residencial quanto comercial, diretamente no
                    sistema de esgoto, no solo e até mesmo no lixo. Como consequência, diversos problemas são gerados,
                    tais como o entupimento dos encanamentos, impermeabilização do solo, encarecimento do tratamento na
                    rede de esgoto, dentre outros.
                </p>
            </figure>
        </section>
        <section class="secIntro secIntro2">
            <figure class="secParagraphTitle">
                <p class="secTitleH secTextH secTextH2">O que é o Fryter?</p>
                <p class="secDescription secTextH secTextH2">
                    Apesar da atual preocupação com o meio ambiente, diariamente ocorre o descarte de óleo de origem
                    vegetal ou animal proveniente de frituras, tanto residencial quanto comercial, diretamente no
                    sistema de esgoto, no solo e até mesmo no lixo. Como consequência, diversos problemas são gerados,
                    tais como o entupimento dos encanamentos, impermeabilização do solo, encarecimento do tratamento na
                    rede de esgoto, dentre outros.
                </p>
            </figure>
            <img src="./assets/img/OilOnSink.png" class="secImg" alt="" srcset="">
        </section>
        <section class="secBgImg">
            <section class="secIntroO secObj">
                <figure class="secParagraphTitle">
                    <p class="secTitleHResp secTitleH secTextH secTextH2 secTextList">Quais São Os Nossos Objetivos?</p>
                    <figure class="secDescription secTextH secTextH2 secList">
                        <article class="secListItem">
                            <img src="./assets/icons/laboIco.svg" class="iconList" alt="" srcset="">
                            <p>Investigar desafios e impactos ambientais do descarte inadequado do óleo de cozinha em
                                estabelecimentos gastronômicos;</p>
                        </article>
                        <article class="secListItem">
                            <img src="./assets/icons/completeListIco.svg" class="iconList" alt="" srcset="">
                            <p>Avaliar métodos existentes de separação e reutilização do óleo de cozinha;</p>
                        </article>
                        <article class="secListItem">
                            <img src="./assets/icons/ecoIco.svg" class="iconList" alt="" srcset="">
                            <p>Estabelecer diretrizes para o uso sustentável do óleo de cozinha separado;</p>
                        </article>
                        <article class="secListItem">
                            <img src="./assets/icons/sucessIco.svg" class="iconList" alt="" srcset="">
                            <p>Avaliar a eficácia do Fryter em termos de decantação, armazenamento e qualidade do
                                produto final.</p>
                        </article>
                    </figure>
                </figure>
                <figure class="imgLegend">
                    <img src="./assets/src/imgLegend.png" alt="" srcset="">
                </figure>
            </section>
        </section>
        <footer>

        </footer>
    `
}
function generateTeam(){
    mainView.innerHTML = `
    
    `
}
function generateDoc(){
    mainView.innerHTML = `
    
    `
}




