import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsDriverFirst = ({ props }) => {
  return (
    <>
      <div
        onChange={(e) => {
          props.setUserEdit({
            email: props.userEdit.email,
            nome: props.userEdit.nome,
            rg: e.target.value,
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
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
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
            email: props.userEdit.email,
            nome: props.userEdit.nome,
            rg: props.userEdit.rg,
            cpf: e.target.value,
            avaliacao: props.perfil.avaliacao,
            cnh: props.userEdit.cnh,
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
            email: props.userEdit.email,
            nome: e.target.value,
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
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
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
