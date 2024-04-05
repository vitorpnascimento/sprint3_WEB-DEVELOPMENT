import './Quemsomos.css'

const Quemsomos = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="special-heading">QUEM NÓS SOMOS?</h2>
        <p>Nosso grupo é composto por 4 pessoas, todas elas cursando Engenharia de Software na FIAP.</p>
        <div className="portfolio-content">
          <div className="card">
            <img src="Images/miguel.jpg" alt="Foto Homem Miguel Parrado" />
            <div className="info">
              <h3>Miguel Parrado</h3>
            </div>
          </div>
          <div className="card">
            <img src="Images/matheus_farias.jpg" alt="Foto Homem Matheus Farias" />
            <div className="info">
              <h3>Matheus Farias</h3>
            </div>
          </div>
          <div className="card">
            <img src="Images/vitor_pinheiro.jpg" alt="Foto Homem Vitor Pinheiro" />
            <div className="info">
              <h3>Vitor Pinheiro</h3>
            </div>
          </div>
          <div className="card">
            <img src="Images/p4.jpg" alt="Foto Homem Pedro Chaves" />
            <div className="info">
              <h3>Pedro Chaves</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quemsomos