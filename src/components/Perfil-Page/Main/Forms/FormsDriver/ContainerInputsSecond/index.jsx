import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsDriverSecond = ({ props }) => {
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
            email: props.userEdit.email,
            nome: props.userEdit.nome,
            rg: props.userEdit.rg,
            cpf: props.userEdit.cpf,
            avaliacao: props.perfil.avaliacao,
            cnh: props.userEdit.cnh,
            data_nascimento: e.target.value,
            descricao: props.userEdit.descricao,
            foto: props.userEdit.foto,
            inicio_carreira: props.userEdit.inicio_carreira,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
            status_motorista: 1,
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
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
            email: props.userEdit.email,
            nome: props.userEdit.nome,
            rg: props.userEdit.rg,
            cpf: props.userEdit.cpf,
            avaliacao: props.perfil.avaliacao,
            cnh: props.userEdit.cnh,
            data_nascimento: props.userEdit.data_nascimento,
            descricao: props.userEdit.descricao,
            foto: props.userEdit.foto,
            inicio_carreira: props.userEdit.inicio_carreira,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
            status_motorista: 1,
            telefone: e.target.value,
            d_preco: props.userEdit.id_preco,
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
            email: props.userEdit.email,
            nome: props.userEdit.nome,
            rg: props.userEdit.rg,
            cpf: props.userEdit.cpf,
            avaliacao: props.perfil.avaliacao,
            cnh: e.target.value,
            data_nascimento: props.userEdit.data_nascimento,
            descricao: props.userEdit.descricao,
            foto: props.userEdit.foto,
            inicio_carreira: props.userEdit.inicio_carreira,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
            status_motorista: 1,
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
          });
        }}
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.cnh,
            classNameLabel: "placeholder",
            nameInput: "CNH:",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
    </>
  );
};
