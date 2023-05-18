import { InputInfosPerfil } from "../../../Inputs/InputInfos";

export const FormsDriverFive = ({ props }) => {
  return (
    <>
      <div className="dropwdown-content comment">
        <label className="placeholder">Preços:</label>
        <select
          name="preços"
          className="selects"
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
              telefone: props.userEdit.telefone,
              id_preco:
                e.currentTarget.childNodes[e.currentTarget.selectedIndex].id,
            });
          }}
        >
          <option>Escolha seu preço</option>
          {props.prices.map((elemento) => {
            return (
              <option key={`key: ${elemento.id}`} id={elemento.id}>
                {elemento.faixa_preco}
              </option>
            );
          })}
        </select>
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
            descricao: e.target.value,
            foto: props.userEdit.foto,
            inicio_carreira: props.userEdit.inicio_carreira,
            senha_atual: props.userEdit.senha_atual,
            nova_senha: props.userEdit.nova_senha,
            status_motorista: 1,
            telefone: props.userEdit.telefone,
            id_preco: props.userEdit.id_preco,
          });
        }}
        className="input-container-descri-driver"
      >
        <InputInfosPerfil
          props={{
            placeholder: props.perfil.descricao,
            classNameLabel: "placeholder",
            nameInput: "Descrição",
            classNameInput: "inputs-more-infos",
          }}
        />
      </div>
    </>
  );
};
