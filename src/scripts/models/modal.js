export class Modal {
    static modalLogin() {
        const loginBtn = document.querySelector(".nav__btnLogin") 
        loginBtn.addEventListener("click", (e) => {
            const modalLogin = document.querySelector(".modal__login")
            modalLogin.classList.toggle("showModal")
        })
    }
}