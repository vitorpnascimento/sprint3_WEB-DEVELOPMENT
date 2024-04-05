import './login_style.css'
import React from 'react';

function Login_medico() {
    function validateLogin() {
        var numeroSus = document.getElementById("numeroSus").value;
        if (numeroSus === "1234") {
          window.location.href = "feedback_medico.html";
        } else {
          alert("Número do CRM inválido. Tente novamente.");
        }
      }
      
      
    return (
        
        <>
            <form id="loginForm">
                <label for="numeroSus">Número do CRM:</label>
                <input type="text" id="numeroSus" name="numeroSus" placeholder="Digite seu número do CRM"/>

                    <button type="button" onclick="validateLogin()">Entrar</button>
                    <a id="voltar" href="demo.html">Voltar</a>
            </form>
            
        </>
    )
}

export default Login_medico
