
import "./style.css";

export const MainMoreAboutDrivers = ({ props }) => {
  return (
    <main className="main-MoreAboutDrivers">

      <div className="show-part-container">

        <div className="photo-describe-informations">
          <div className="lil-card-describing-container">
            <div className="photo-container">
              <img src="#" alt="" />
            </div>
            <div className="lil-card-descring-infos-container">
              <div className="lil-card-describing-infos-content">
                <p className="main-infos">Sobre mim:</p>
                <p className="infos-about">Nome: Wesley Moura </p>
                <p className="infos-about">Idade: 44</p>
                <p className="infos-about">13 anos de transportador</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="show-part-container">

        <div className="photo-describe-informations">
          <div className="lil-card-describing-container">
            <div className="photo-container">
              <img src="#" alt="" />
            </div>
            <div className="lil-card-descring-infos-container">
              <div className="lil-card-describing-infos-content">
                <p className="main-infos">Van:</p>
                <p className="infos-about">Viagem: 4</p>
                <p className="infos-about">Placa: ASD4B8</p>
                <p className="infos-about">Modelo: Sprinter</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="infos-part-container">

        <div className="more-about-driver-card">
          <p>Preço de Serviço: R$100 - R$150</p>
          <div className="message-content">
            <p>Meu nome é Wesley Moura e tenho 44 anos e trabalho </p>
            <p>a 13 anos como transportador de van escolar.</p>
            <p>Desenvolvi afeto pela profissão desde cedo.</p>
          </div>
          <div className="contact-content">
            <p>(11)998876919</p>
            <p>wesley@gmail.com</p>
          </div>
        </div>
        <div className="filter-container-part">
          <input className='input-comment-something' type="text" />
          <button className='button-send-comment'></button>
        </div>
      </div>

    </main>
  )
}