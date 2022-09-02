import { Toast } from "../toast.js";

export class Requests {
    static myToken = localStorage.getItem("brenoGram@token")

    static async login(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ${this.myToken}`
            },
            body: JSON.stringify(data)
        };

        const result = await fetch('https://m2-rede-social.herokuapp.com/api/users/login/', options)
            .then(response => response.json())
            .then(response => {
                if (response.token !== undefined) {
                    localStorage.setItem("brenoGram@token", response.token)
                    localStorage.setItem("brenoGram@userId", response.user_uuid)
                    Toast.create("Login efetuado com sucesso", "green")
                    window.location.replace("/src/pages/dashboard.html")
                }
            })
            .catch(err => {
                if (response.token == undefined) {
                    Toast.create("Email ou senha inválidos", "red")
                }
            });

        return result
    }

    static async cadastre(data) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const result = await fetch('https://m2-rede-social.herokuapp.com/api/users/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((err) => {
                console.log(err)
                Toast.create("Email ou senha inválidos", "red")
            })

        return result
    }
}