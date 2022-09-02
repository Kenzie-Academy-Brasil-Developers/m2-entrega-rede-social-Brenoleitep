import { Instance } from "./axios.js";
import { Requests } from "./models/api.js";
import { Modal } from "./models/modal.js";


Modal.abrirFecharModal()
// Requests.login()
Requests.cadastre(
    {
        "username": "Breno",
        "email": "brenoleitepereira@gmail.com",
        "password": "Kenzie1234",
        "work_at": "Dev Front-end",
        "image": "https://cms.somosfanaticos.com/__export/1661339879489/sites/fanaticos/img/2022/08/24/neymar_surpreende_ao_apontar_adversxrio_mais_difxcil_que_jx_enfrentou_incomoda_demais.jpg_1159711837.jpg"
    }
)
