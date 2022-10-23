document.querySelectorAll('.slide-noticias div .card')[1].scrollIntoView({ inline: "center", block: "center" })//centraliza o slide no modo mobile

/* start - slide NerdCast */
const btnR = document.querySelector(".btnRight")
let index = 0
const btns = [...document.querySelectorAll('.btn-nav')]
const slide = document.querySelectorAll('.slide')

btns.forEach((e) => {
    e.addEventListener("click", () => {
        const r = e.classList.contains('btnRight')
        if (r) {
            index += 1
        }
        else {
            index -= 1
        }
        if (index >= (slide.length)) {
            index = 0
        }

        if (index < 0) {
            index = slide.length - 1
        }
        slide[index].scrollIntoView({
            inline: "center",
            block: "center"
        })
    })
})
/* End - slide NerdCast */

/* start - menu mobile */

const btnMenu = document.querySelector(".menu-hamburguer")
const menuMobile = document.querySelector(".main-header")

btnMenu.addEventListener("click", () => {
    const active = btnMenu.classList.toggle("active")
    if (active) {
        //insertAdjacentHTML adiciona tags antes ou depois de outra tag já existente no html
        menuMobile.insertAdjacentHTML("afterend", `
            <div class="menu-mobile">
                <header>
                    <div class="logo">
                        <a href="/"></a>
                    </div>
                </header>
                <section>
                    <ul class="list-links-menu">
                        <li>
                            <a href="#">
                                NerdCast
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                NerdOffice
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Sr. K
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Nerdologia
                            </a>
                        </li>
                        <li>
                            <a href="#">NerdPlayer</a>
                        </li>
                        <li>
                            <a href="#">DeseKaixa</a>
                        </li>
                        <li>
                            <a href="#">Anuncie</a>
                        </li>
                        <button class="btn-dark-mode" id="btn-dark-mode" onClick="themeMode()">
                            <span class="material-symbols-outlined">dark_mode</span>
                        </button>
                    </ul>
                </section>
            </div>
        `)
    }
    else {
        document.querySelector(".menu-mobile").remove()
    }
})
/* end - menu mobile */

/* start - dark-mode */

const btnActiveDarkMode = document.querySelector(".btn-dark-mode")

btnActiveDarkMode.addEventListener("click", themeMode)//Evento de click, chama a função themeMode


function themeMode(){
    document.body.classList.toggle("dark")//Verifica se já existe uma class dark, se existir a função toggle remove ela caso contrario ela adciona a class

    let iconDarkOrLight = [...document.querySelectorAll(".btn-dark-mode span")]  

    /* 
        coleta todas as DOMs com o seletor ".btn-dark-mode span", a função querySelectorAll retorna um NodeList.
        Depois disso, espalhei os valores do NodeList dentro de uma nova lista ([...valor]) e guardei em uma variavel
    */

    iconDarkOrLight.forEach((iconDarkOrLightReturn)=>{ //O forEach percorre todos os valores de uma lista (array) e retorna uma lista nova
        if(iconDarkOrLightReturn.textContent == "dark_mode"){
            iconDarkOrLightReturn.textContent = "light_mode"
        }
        else{
            iconDarkOrLightReturn.textContent = "dark_mode"
        }
    })
}

/* end - dark mode */