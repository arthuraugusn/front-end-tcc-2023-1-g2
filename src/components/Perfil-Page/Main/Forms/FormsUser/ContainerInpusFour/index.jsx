import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsUserFour = ({ props }) => {
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
            numero: props.userEdit.numero,
            email: props.userEdit.email,
            senha_atual: e.target.value,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            type: "password",
            placeholder: "********",
            classNameLabel: "placeholder",
            nameInput: "Senha atual:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
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
            email: props.userEdit.email,
            numero: props.userEdit.numero,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: e.target.value,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            type: "password",
            placeholder: "********",
            classNameLabel: "placeholder",
            nameInput: "Nova senha:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
    </>
  );
};
