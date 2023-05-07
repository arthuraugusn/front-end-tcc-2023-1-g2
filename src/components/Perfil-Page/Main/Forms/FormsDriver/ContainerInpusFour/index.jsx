import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsDriverFour = ({ props }) => {
  return (
    <>
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
            senha_atual: e.target.value,
            nova_senha: props.userEdit.nova_senha,
            status_motorista: 1,
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
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
            nova_senha: e.target.value,
            status_motorista: 1,
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
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
