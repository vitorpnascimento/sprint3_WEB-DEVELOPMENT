import './Features.css'

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="feat">
          <i className="fas fa-magic fa-3x"></i>
          <h3>Bem-vindo(a) a Sob Solution!</h3>
          <p>Olá, nós somos a Sob Solution, uma equipe de 4 integrantes motivados a melhorar o mundo com a tecnologia ao nosso redor. Trabalhando para ser a solução para a sua empresa!</p>
        </div>
        <div className="feat">
          <i className="far fa-gem fa-3x"></i>
          <h3>Para saber mais sobre esse projeto para o HC!</h3>
          <a href="projeto.html">Clique aqui!</a>
        </div>
        <div className="feat">
          <i className="fas fa-globe-asia fa-3x"></i>
          <h3>QUEM NÓS SOMOS?</h3>
          <a href="sobre_nos.html">Clique aqui para saber mais!</a>
        </div>
      </div>
    </div>
  );
}

export default Features;