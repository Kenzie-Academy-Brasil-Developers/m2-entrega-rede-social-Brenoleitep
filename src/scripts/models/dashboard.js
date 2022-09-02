export class RenderDash {
    static token = localStorage.getItem("brenoGram@token")

    static postCamp(response) {
        const main = document.querySelector(".main__dashboard")
        const divPostagemInfo = document.createElement("div")
        divPostagemInfo.classList.add("main__postagem--info")

        const divPostagemImg = document.createElement("div")
        divPostagemImg.classList.add("main__postagem--img")
        const imgPerfil = document.createElement("img")

        const divPostagemTitles = document.createElement("div")
        divPostagemTitles.classList.add("main__postagem--titles")
        const titleName = document.createElement("h2")
        titleName.classList.add("title2")
        const textWork = document.createElement("span")
        textWork.classList.add("text2")
        const textFollow = document.createElement("p")
        textFollow.classList.add("text3")

        const form = document.createElement("form")
        const formInputTitle = document.createElement("input")
        formInputTitle.classList.add("inputDefault", "inputDefault:active", "inputDefault::placeholder", "form__input--titlePost")
        const formInputDesc = document.createElement("input")
        formInputDesc.classList.add("inputDefault", "inputDefault:active", "inputDefault::placeholder", "form__input--descPost")
        const formButton = document.createElement("button")
        formButton.classList.add("buttonPrimary")

        const sair = document.querySelector(".nav__btnSair")
        if (this.token == undefined) {
            sair.innerHTML = "Login"
            sair.addEventListener("click", () => {
                window.location.replace("/index.html")
                localStorage.removeItem("brenoGram@token")
            })
        } else {
            sair.addEventListener("click", () => {
                window.location.replace("/index.html")
            })
        }

        imgPerfil.src = response.image
        titleName.innerText = response.username
        textWork.innerText = response.work_at
        textFollow.innerText = `${response.followers_amount} Seguidores`
        formInputDesc.placeholder = "Digitar descrição do post"
        formInputTitle.placeholder = "Digitar título do post"
        formButton.innerText = "Postar"

        console.log(response)
        form.append(formInputTitle, formInputDesc, formButton)
        divPostagemTitles.append(titleName, textWork, textFollow)
        divPostagemImg.append(imgPerfil)
        divPostagemInfo.append(divPostagemImg, divPostagemTitles, form)
        main.appendChild(divPostagemInfo)
    }

    
}

