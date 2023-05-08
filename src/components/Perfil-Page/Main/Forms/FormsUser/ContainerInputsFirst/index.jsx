import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsUserFirst = ({ props }) => {
  return (
    <>
      <div
        onChange={(e) => {
          props.setUserEdit({
            foto: props.userEdit.foto,
            rg: e.target.value,
            cpf: props.userEdit.cpf,
            nome: props.userEdit.nome,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: props.userEdit.telefone,
            cep: props.userEdit.cep,
            numero: props.userEdit.numero,
            email: props.userEdit.email,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.rg,
            classNameLabel: "placeholder",
            nameInput: "RG:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
      <div
        onChange={(e) => {
          props.setUserEdit({
            foto: props.userEdit.foto,
            rg: props.userEdit.rg,
            cpf: e.target.value,
            nome: props.userEdit.nome,
            numero: props.userEdit.numero,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: props.userEdit.telefone,
            cep: props.userEdit.cep,
            email: props.userEdit.email,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.cpf,
            classNameLabel: "placeholder",
            nameInput: "CPF:",
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
            nome: e.target.value,
            numero: props.userEdit.numero,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: props.userEdit.telefone,
            cep: props.userEdit.cep,
            email: props.userEdit.email,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.nome,
            classNameLabel: "placeholder",
            nameInput: "NOME:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
    </>
  );
};
