import './Projeto.css'

function Solucao_proposta() {
    return (
        <>
            <div class="portfolio" id="portfolio">
                <div class="container">
                    <h2 class="special-heading">Solução proposta</h2>
                    <p>Nosso feedback</p>
                    <div class="portfolio-content">
                        <div class="card">
                            <img src="Images/feedback_paciente.png" alt="" />
                            <div class="info">
                                <h3>Versão Paciente:</h3>

                                <p class="texto-feedback">1. Identificação e Acesso:</p>
                                <p class="texto-feedback">- Utilização de um aplicativo ou site acessível a todos os cidadãos cadastrados no
                                    SUS.</p>
                                <p class="texto-feedback">- O paciente realiza o login com seu número do SUS e senha.</p>

                                <p class="texto-feedback">2. Menu de Opções:</p>
                                <p class="texto-feedback">- Ao efetuar o login, o paciente terá acesso a funcionalidade de Feedback.</p>

                                <p class="texto-feedback">3. Feedback Específico:</p>
                                <p class="texto-feedback">- Uso de QR code para identificar médicos, data e exame.</p>
                                <p class="texto-feedback">- O paciente pode avaliar diversos aspectos, incluindo recepção, triagem,
                                    atendimento médico, e pós-atendimento.</p>

                                <p class="texto-feedback">4. Perguntas Estruturadas:</p>
                                <p class="texto-feedback">- Após a identificação, o sistema apresentará cinco perguntas estruturadas:</p>
                                <p class="texto-feedback"> - Avaliação geral do atendimento (obrigatória, escala de 0 a 5 estrelas).</p>
                                <p class="texto-feedback"> - Pergunta relacionada ao pré-atendimento (obrigatória).</p>
                                <p class="texto-feedback"> - Pergunta relacionada ao pós-atendimento (obrigatória).</p>
                                <p class="texto-feedback"> - Pergunta específica sobre o médico (facultativa).</p>
                                <p class="texto-feedback"> - Pergunta sobre a experiência no hospital (facultativa).</p>

                                <p class="texto-feedback">5. Campo de Observação:</p>
                                <p class="texto-feedback">- Espaço destinado a observações, elogios, críticas ou sugestões adicionais.</p>

                                <p class="texto-feedback">6. Submissão e Agradecimento:</p>
                                <p class="texto-feedback">- Após o preenchimento, o paciente pressiona o botão "Enviar", e a página é
                                    atualizada com uma mensagem de agradecimento pelo tempo dedicado ao feedback.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="Images/feedback_medico.png" alt="" />
                            <div class="info">
                                <h3>Versão Médico:</h3>


                                <p class="texto-feedback">1. Identificação e Acesso:</p>
                                <p class="texto-feedback">- Utilização do CRM como meio de identificação para acessar o portal específico
                                    para médicos.</p>
                                <p class="texto-feedback">- O médico realiza o login com seu CRM e senha.</p>

                                <p class="texto-feedback">2. Menu de Opções:</p>
                                <p class="texto-feedback">- Ao acessar o portal, o médico terá um menu com diversas opções, destacando a
                                    funcionalidade de Feedback.</p>

                                <p class="texto-feedback">3. Feedback Detalhado:</p>
                                <p class="texto-feedback">- Abordagem específica para o médico, incluindo detalhes sobre o atendimento ao
                                    paciente, problemas identificados e condição da criança.</p>

                                <p class="texto-feedback">4. Perguntas Estruturadas:</p>
                                <p class="texto-feedback">- Cinco perguntas estruturadas, sendo três obrigatórias e duas facultativas.</p>
                                <p class="texto-feedback">- Perguntas obrigatórias exploram a avaliação do atendimento, o problema abordado
                                    e a condição do paciente.</p>
                                <p class="texto-feedback">- Perguntas facultativas permitem ao médico fornecer insights sobre sua
                                    experiência e percepção geral do hospital.</p>

                                <p class="texto-feedback">5. Campo de Observação:</p>
                                <p class="texto-feedback">- Semelhante à versão do paciente, há um espaço para observações, elogios,
                                    críticas ou sugestões adicionais.</p>

                                <p class="texto-feedback">6. Submissão e Agradecimento:</p>
                                <p class="texto-feedback">- Após o preenchimento, o médico pressiona o botão "</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solucao_proposta
