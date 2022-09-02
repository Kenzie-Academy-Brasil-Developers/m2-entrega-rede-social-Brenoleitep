import { Instance, instance } from "../axios.js";
import { Toast } from "../toast.js";

export class Requests {
    // static async login(data) {
    //     const userLogin = await instance
    //         .post(`users/login/`, data)
    //         .then((resp) => {
    //             localStorage.setItem("brenoGram@token", resp.token)
    //             localStorage.setItem("brenoGram@userId", resp.user_uuid)

    //             Toast.create("login realizado com sucesso", "green")
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             Toast.create("Email ou senha inválidos", "red")
    //         })
    //     return userLogin
    // }

    static async cadastre(data) {
        const userCadastre = await Instance.axiosCreate()
            .post(`users/`, data)
            .then((resp) => {
                Toast.create("Cadastro realizado com sucesso", "green")
            })
            .catch((err) => {
                console.log(err)
                Toast.create(err.message, "red")
            })
        return userCadastre
    }


}