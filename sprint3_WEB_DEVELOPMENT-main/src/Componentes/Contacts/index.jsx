import React from 'react';
import './Contacts.css';

const Contacts = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtendo os valores do formulário
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    const emailUsuario = document.getElementById("emailUsuario").value;
    const assunto = document.getElementById("assunto").value;
    const duvida = document.getElementById("duvida").value;

    // Salvando no localStorage
    const contato = {
      nomeUsuario: nomeUsuario,
      emailUsuario: emailUsuario,
      assunto: assunto,
      duvida: duvida
    };

    localStorage.setItem("contato", JSON.stringify(contato));

    // Exibindo uma mensagem de confirmação (você pode personalizar conforme necessário)
    alert("Sua mensagem foi enviada!");

    // Resetando o formulário
    document.getElementById("formularioDuvidas").reset();
  };

  return (
    <div className="contact">
      <div className="container">
        <h2 className="special-heading">Contato</h2>
        <p>Entre em contato conosco</p>
        <div className="formulario">
          <center>
            <form id="formularioDuvidas" onSubmit={handleSubmit}>
              <h3>FORMULÁRIO</h3>

              <label htmlFor="nomeUsuario">Nome:</label> <input type="text" placeholder="Insira seu nome"
                id="nomeUsuario" required />
              <label htmlFor="emailUsuario">Email:</label> <input type="email" placeholder="Insira seu email"
                id="emailUsuario" required />
              <label htmlFor="assunto">Assunto:</label> <input type="text" placeholder="Insira o assunto"
                id="assunto" required />
              <label htmlFor="duvida">Deixe sua dúvida:</label>
              <input type="text" placeholder="Escreva sua dúvida!" id="duvida" required />
              <p id="botao_enviar"><input type="submit" value="Enviar" /></p>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
