import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsUserThird = ({ props }) => {
  return (
    <>
      <div
        onChange={(e) => {
          props.setUserEdit({
            foto: props.userEdit.foto,
            rg: props.userEdit.rg,
            cpf: props.userEdit.cpf,
            nome: props.userEdit.nome,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: props.userEdit.telefone,
            cep: props.userEdit.cep,
            email: e.target.value,
            numero: props.userEdit.numero,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.email,
            classNameLabel: "placeholder",
            nameInput: "Email:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
      {/* <div
        onChange={(e) => {
          props.setUserEdit({
            foto: props.userEdit.foto,
            rg: props.userEdit.rg,
            cpf: props.userEdit.cpf,
            nome: props.userEdit.nome,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: props.userEdit.telefone,
            cep: props.userEdit.cep,
            email: props.userEdit.email,
            numero: e.target.value,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.numero,
            classNameLabel: "placeholder",
            nameInput: "Número da Casa:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div> */}
    </>
  );
};
