import api from "../api"

export const loadTypetransport = (setTypesTransport) => {
    api
        .get("typeContracts")
        .then((response) => {
            setTypesTransport(response.data.typesContracts)
                .catch((err) => {
                    console.log("Erro" + err)
                })
        })
}