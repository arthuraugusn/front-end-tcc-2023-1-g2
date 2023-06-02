import api from "../api";

export const registerUserClient = (user, setResponseError) => {
  let imgUser = "";
  if (user.img === undefined || user.img === "" || user.img === null) {
    imgUser =
      "https://firebasestorage.googleapis.com/v0/b/tcc-project-firebase.appspot.com/o/imgs%2Fdownload.png?alt=media&token=1f6e9e4f-958e-4c0e-8b19-2c757007ad3b";
  } else {
    imgUser = user.img;
  }

  if (imgUser !== "" || imgUser !== undefined || imgUser !== null) {
    console.log(user);
    console.log(imgUser);
    api
      .post("user", {
        email: `${user.email}`,
        nome: `${user.nome}`,
        rg: `${user.rg}`,
        cpf: `${user.cpf}`,
        telefone: `${user.telefone}`,
        data_nascimento: `${user.data_nascimento}`,
        senha: `${user.senha}`,
        foto: `${imgUser}`,
        cep: `${user.cep}`,
        numero: parseInt(user.numero),
        status_usuario: user.status_usuario,
      })
      .then((response) => {
        setResponseError(response);
      })
      .catch((err) => {
        console.log(err);
        setResponseError(err);
      });
  }
};
