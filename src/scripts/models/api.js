import { Toast } from "../toast.js";
import { RenderDash } from "./dashboard.js";

export class Requests {
    static myToken = localStorage.getItem("brenoGram@token")
    static myId = localStorage.getItem("brenoGram@userId")

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
                Toast.create("Email ou senha inválidos", "red")
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

    static async getUsers() {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'token 19eb00486e2c4e4b7215b822081a668318a38053'
            }
          };
          
          fetch(`https://m2-rede-social.herokuapp.com/api/users/${this.myId}/`, options)
            .then(response => response.json())
            .then(response => {
                RenderDash.postCamp(response)
            })
            .catch(err => console.error(err));
    }
}
Requests.getUsers()
