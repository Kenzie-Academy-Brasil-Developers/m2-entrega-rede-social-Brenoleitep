const myToken = localStorage.getItem("brenoGram@token")

export class Instance {

    static axiosCreate() {
        const axiosInstance = axios.create({
            baseURL: 'https://m2-rede-social.herokuapp.com/api/',
            timeout: 1000,
            headers: {
                "content/type": "application/json",
                "authorization": `Token ${myToken}`
            }
        })
        return axiosInstance
    }
}
