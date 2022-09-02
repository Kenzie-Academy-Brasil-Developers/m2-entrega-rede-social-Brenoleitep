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

        form.append(formInputTitle, formInputDesc, formButton)
        divPostagemTitles.append(titleName, textWork, textFollow)
        divPostagemImg.append(imgPerfil)
        divPostagemInfo.append(divPostagemImg, divPostagemTitles, form)
        main.appendChild(divPostagemInfo)
    }

    static postsDash(response) {
        const section = document.querySelector(".main__dashboard--section")
        const sectionUl = document.createElement("ul")
        const titlePosts = document.createElement("h2")
        titlePosts.classList.add("title1")
        titlePosts.innerText = "Posts"

        const data = response.forEach((elem) => {



            sectionUl.classList.add("section__ul")
            const sectionLi = document.createElement("li")
            sectionLi.classList.add("section__li")

            const sectionDiv = document.createElement("div")
            sectionDiv.classList.add("section__divInfo")
            const imgDivInfo = document.createElement("img")
            imgDivInfo.classList.add("section__divInfo--img")
            const nameAuthor = document.createElement("h3")
            nameAuthor.classList.add("title2")
            const workAuthor = document.createElement("span")
            workAuthor.classList.add("text2")

            const divText = document.createElement("div")
            divText.classList.add("section__divText")
            const titlePost = document.createElement("h2")
            titlePost.classList.add("title1")
            const resume = document.createElement("span")
            resume.classList.add("text1")


            const divButtons = document.createElement("div")
            divButtons.classList.add("section__divButtons")
            const button = document.createElement("button")
            button.classList.add("buttonGrey1")
            const imgDivBtn = document.createElement("img")
            const counter = document.createElement("p")

            imgDivInfo.src = elem.author.image
            imgDivInfo.alt = elem.author.username
            workAuthor.innerText = elem.author.work_at
            nameAuthor.innerText = elem.author.username

            titlePost.innerText = elem.title
            resume.innerText = elem.description

            button.innerText = "Abrir Post"
            counter.innerText = elem.likes.length
            imgDivBtn.src = "/src/assets/Vector (1).png"


            console.log(elem)

            sectionDiv.append(imgDivInfo, nameAuthor, workAuthor)
            divText.append(titlePost, resume)
            divButtons.append(button, imgDivBtn, counter)
            sectionLi.append(sectionDiv, divText, divButtons)
            sectionUl.append(sectionLi)
        })
        section.append(titlePosts, sectionUl)

        return data
    }

   
}