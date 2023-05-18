import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsUserSecond = ({ props }) => {
  return (
    <>
      <div
        onClick={() => {
          props.setInputValueDataNascimento({
            status: false,
            data: "",
            type: "date",
          });
        }}
        onChange={(e) => {
          props.setUserEdit({
            foto: props.userEdit.foto,
            rg: props.userEdit.rg,
            cpf: props.userEdit.cpf,
            nome: props.userEdit.nome,
            data_nascimento: e.target.value,
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
            status: props.inputValueDataNascimento.status,
            type: props.inputValueDataNascimento.type,
            placeholder: props.inputValueDataNascimento.placeholder,
            classNameLabel: "placeholder",
            nameInput: "Data de nascimento:",
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
            numero: props.userEdit.numero,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: e.target.value,
            cep: props.userEdit.cep,
            email: props.userEdit.email,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.telefone,
            classNameLabel: "placeholder",
            nameInput: "Telefone:",
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
            numero: props.userEdit.numero,
            nome: props.userEdit.nome,
            data_nascimento: props.userEdit.data_nascimento,
            telefone: props.userEdit.telefone,
            cep: e.target.value,
            email: props.userEdit.email,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.cep,
            classNameLabel: "placeholder",
            nameInput: "CEP:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
    </>
  );
};
