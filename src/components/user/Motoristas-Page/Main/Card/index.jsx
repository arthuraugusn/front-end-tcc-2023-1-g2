import "./style.css";

export const Card = ({ driver }) => {
  return (
    <>
      {driver.map((drivers) => (
        <div
          onClick={() => {
            console.log(drivers.id);
          }}
          key={drivers.id}
          className="card-driver"
        >
          <div className="container-image">
            <img
              src={drivers.foto}
              /* trocar url por foto */ alt="Foto motorista"
            />
          </div>
          <div className="container-all-infos">
            <div className="nome-score">
              <span className="nome-motorista">{drivers.nome}</span>
            </div>
            <div className="infos-contratar">
              <div className="infos-motorista">
                <p className="info idade">Idade: 47 anos</p>
                <p className="info vagas">
                  Vagas disponíveis: {drivers.van[0].quantidade_vagas}
                </p>
                <p className="info tempo-carreira">Tempo de carreira: 3 anos</p>
              </div>
              <div className="button-contratar">
                <button>CONTRATAR</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
