import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsDriverThird = ({ props }) => {
  return (
    <>
      <div
        onChange={(e) => {
          props.setUserEdit({
            email: e.target.value,
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
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
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
      <div
        onClick={() => {
          props.setInputValueInicioCarreira({
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
            data_nascimento: props.userEdit.data_nascimento,
            descricao: props.userEdit.descricao,
            foto: props.userEdit.foto,
            inicio_carreira: e.target.value,
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
            placeholder: props.inputValueInicioCarreira.placeholder,
            classNameLabel: "placeholder",
            status: props.inputValueInicioCarreira.status,
            nameInput: "Data de inicio de carreira:",
            type: props.inputValueInicioCarreira.type,
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
    </>
  );
};
