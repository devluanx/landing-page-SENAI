import "./App.css";

function App() {
  return (
    <div className="site">

      <header className="cabecalho">
        <div className="conteudo navegacao">
          <a href="#inicio" className="logo">
            <span className="logo-marca">&lt;/&gt;</span>

            <div>
              <strong>SENAI</strong>
              <small>Desenvolvimento de Sistemas</small>
            </div>
          </a>

          <nav className="menu-navegacao">
            <a href="#sobre">Sobre</a>
            <a href="#aprendizado">O que você aprende</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#atuacao">Áreas de atuação</a>
            <a href="#projetos">Projetos</a>
          </nav>

          <a href="#inscricao" className="botao-navegacao">
            Conheça o curso
          </a>
        </div>
      </header>

      <main>

        <section className="principal" id="inicio">
          <div className="conteudo conteudo-principal">

            <div className="texto-principal">
              <span className="etiqueta">
                TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS
              </span>

              <h1>
                Transforme ideias em
                <span> tecnologia.</span>
              </h1>

              <p>
                Desenvolva soluções, aprenda novas tecnologias e construa
                seu futuro na área de TI.
              </p>

              <div className="botoes-principais">
                <a href="#sobre" className="botao primario">
                  Conheça o curso
                </a>

                <a href="#aprendizado" className="botao secundario">
                  O que vou aprender?
                </a>
              </div>
            </div>

            <div className="visual-principal">
              <div className="cartao-codigo">

                <div className="topo-codigo">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="conteudo-codigo">
                  <p>
                    <span className="roxo">const</span> futuro = {"{"}
                  </p>

                  <p className="indentacao">
                    <span className="azul">tecnologia:</span>{" "}
                    <span className="verde">"React"</span>,
                  </p>

                  <p className="indentacao">
                    <span className="azul">criatividade:</span>{" "}
                    <span className="laranja">true</span>,
                  </p>

                  <p className="indentacao">
                    <span className="azul">aprendizado:</span>{" "}
                    <span className="verde">"constante"</span>
                  </p>

                  <p>{"};"}</p>

                  <br />

                  <p>
                    <span className="roxo">console</span>.
                    <span className="azul">log</span>(
                    <span className="verde">
                      "Seu futuro começa aqui!"
                    </span>
                    );
                  </p>
                </div>
              </div>

              <div className="cartao-flutuante cartao-um">
                &lt;/&gt; Código
              </div>

              <div className="cartao-flutuante cartao-dois">
                ◈ Tecnologia
              </div>
            </div>

          </div>
        </section>

        <section className="secao sobre" id="sobre">
          <div className="conteudo">

            <div className="cabecalho-secao">
              <span className="numero-secao">01</span>

              <div>
                <span className="titulo-pequeno">
                  SOBRE O CURSO
                </span>

                <h2>Onde suas ideias ganham vida.</h2>
              </div>
            </div>

            <div className="grade-sobre">

              <div className="texto-sobre">
                <p>
                  O <strong>Técnico em Desenvolvimento de Sistemas</strong>
                  prepara estudantes para criar, desenvolver e manter
                  sistemas e aplicações utilizando diferentes tecnologias.
                </p>

                <p>
                  Durante o curso, você aprende desde os fundamentos da
                  programação até conceitos utilizados no desenvolvimento
                  de aplicações web, bancos de dados, APIs e sistemas.
                </p>

                <p>
                  O objetivo é desenvolver conhecimentos técnicos e também
                  habilidades para transformar problemas reais em soluções
                  digitais.
                </p>
              </div>

              <div className="destaque-sobre">
                <div className="icone-destaque">01</div>

                <h3>O que faz um desenvolvedor?</h3>

                <p>
                  Analisa problemas, planeja soluções, escreve código,
                  testa aplicações e trabalha na criação e manutenção
                  de sistemas.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="secao aprendizado" id="aprendizado">
          <div className="conteudo">

            <div className="cabecalho-secao centralizado">
              <span className="titulo-pequeno">
                CONHECIMENTOS
              </span>

              <h2>O que você aprende</h2>

              <p>
                Conhecimentos que ajudam você a entender e construir
                soluções digitais.
              </p>
            </div>

            <div className="grade-cartoes">

              <article className="cartao-aprendizado">
                <span className="icone-cartao">01</span>
                <h3>Lógica de programação</h3>
                <p>
                  Aprenda a pensar de forma estruturada e transformar
                  problemas em soluções através da programação.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">02</span>
                <h3>Desenvolvimento Web</h3>
                <p>
                  Crie páginas e aplicações web utilizando tecnologias
                  modernas do mercado.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">03</span>
                <h3>Frontend</h3>
                <p>
                  Desenvolva interfaces interativas, organizadas e
                  responsivas para diferentes dispositivos.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">04</span>
                <h3>Backend</h3>
                <p>
                  Entenda a lógica por trás das aplicações e como os
                  sistemas processam informações.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">05</span>
                <h3>Banco de dados</h3>
                <p>
                  Aprenda a armazenar, organizar e consultar informações
                  utilizando bancos de dados.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">06</span>
                <h3>Desenvolvimento de APIs</h3>
                <p>
                  Conheça formas de conectar sistemas e aplicações.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">07</span>
                <h3>Desenvolvimento de aplicativos</h3>
                <p>
                  Conheça conceitos utilizados para criar aplicações
                  para diferentes dispositivos e plataformas.
                </p>
              </article>

              <article className="cartao-aprendizado">
                <span className="icone-cartao">08</span>
                <h3>Controle de versão</h3>
                <p>
                  Aprenda a utilizar ferramentas como Git e GitHub para
                  organizar projetos e acompanhar alterações.
                </p>
              </article>

            </div>
          </div>
        </section>

        <section className="secao tecnologias" id="tecnologias">
          <div className="conteudo">

            <div className="cabecalho-secao">
              <span className="numero-secao">03</span>

              <div>
                <span className="titulo-pequeno">
                  TECNOLOGIAS
                </span>

                <h2>Ferramentas que fazem parte do desenvolvimento.</h2>
              </div>
            </div>

            <div className="grade-tecnologias">

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">01</span>
                <h3>HTML</h3>
                <p>
                  Estrutura e organização das páginas web.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">02</span>
                <h3>CSS</h3>
                <p>
                  Estilização, layouts e interfaces responsivas.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">03</span>
                <h3>JavaScript</h3>
                <p>
                  Interatividade e lógica para aplicações web.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">04</span>
                <h3>React</h3>
                <p>
                  Criação de interfaces utilizando componentes.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">05</span>
                <h3>Node.js</h3>
                <p>
                  Desenvolvimento de aplicações utilizando JavaScript
                  no backend.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">06</span>
                <h3>SQL</h3>
                <p>
                  Criação e consulta de bancos de dados relacionais.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">07</span>
                <h3>Git</h3>
                <p>
                  Controle de versões e acompanhamento das alterações.
                </p>
              </div>

              <div className="cartao-tecnologia">
                <span className="icone-tecnologia">08</span>
                <h3>GitHub</h3>
                <p>
                  Hospedagem de projetos e colaboração entre
                  desenvolvedores.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="secao atuacao" id="atuacao">
          <div className="conteudo">

            <div className="cabecalho-secao centralizado">
              <span className="titulo-pequeno">
                CARREIRA
              </span>

              <h2>Áreas de atuação</h2>

              <p>
                Depois de aprender desenvolvimento de sistemas,
                existem diferentes caminhos profissionais na tecnologia.
              </p>
            </div>

            <div className="grade-atuacao">

              <article className="cartao-atuacao">
                <span className="icone-atuacao">01</span>
                <h3>Frontend</h3>
                <p>
                  Desenvolvimento de interfaces e experiências para
                  usuários na web.
                </p>
              </article>

              <article className="cartao-atuacao">
                <span className="icone-atuacao">02</span>
                <h3>Backend</h3>
                <p>
                  Desenvolvimento da lógica, serviços e funcionamento
                  interno das aplicações.
                </p>
              </article>

              <article className="cartao-atuacao">
                <span className="icone-atuacao">03</span>
                <h3>Full Stack</h3>
                <p>
                  Atuação tanto no frontend quanto no backend de
                  aplicações.
                </p>
              </article>

              <article className="cartao-atuacao">
                <span className="icone-atuacao">04</span>
                <h3>Aplicativos</h3>
                <p>
                  Criação e manutenção de aplicações para diferentes
                  dispositivos.
                </p>
              </article>

              <article className="cartao-atuacao">
                <span className="icone-atuacao">05</span>
                <h3>Banco de dados</h3>
                <p>
                  Organização, gerenciamento e manutenção de informações
                  utilizadas pelos sistemas.
                </p>
              </article>

              <article className="cartao-atuacao">
                <span className="icone-atuacao">06</span>
                <h3>Suporte e manutenção</h3>
                <p>
                  Identificação de problemas, manutenção e melhoria de
                  sistemas existentes.
                </p>
              </article>

            </div>
          </div>
        </section>

        <section className="secao projetos" id="projetos">
          <div className="conteudo">

            <div className="cabecalho-secao">
              <span className="numero-secao">05</span>

              <div>
                <span className="titulo-pequeno">
                  PRÁTICA
                </span>

                <h2>Projetos que você pode desenvolver.</h2>
              </div>
            </div>

            <div className="grade-projetos">

              <article className="cartao-projeto">
                <span className="numero-projeto">01</span>
                <h3>Cadastro de clientes</h3>
                <p>
                  Sistema para cadastrar, consultar, editar e organizar
                  informações de clientes.
                </p>
              </article>

              <article className="cartao-projeto">
                <span className="numero-projeto">02</span>
                <h3>Controle de estoque</h3>
                <p>
                  Aplicação para controlar produtos, quantidades e
                  movimentações de estoque.
                </p>
              </article>

              <article className="cartao-projeto">
                <span className="numero-projeto">03</span>
                <h3>Sistema de agendamento</h3>
                <p>
                  Sistema para organizar horários, serviços e
                  agendamentos.
                </p>
              </article>

              <article className="cartao-projeto">
                <span className="numero-projeto">04</span>
                <h3>E-commerce</h3>
                <p>
                  Loja virtual com produtos, categorias, carrinho e
                  informações de compra.
                </p>
              </article>

              <article className="cartao-projeto">
                <span className="numero-projeto">05</span>
                <h3>Painel administrativo</h3>
                <p>
                  Interface para acompanhar informações e administrar
                  dados de uma aplicação.
                </p>
              </article>

              <article className="cartao-projeto">
                <span className="numero-projeto">06</span>
                <h3>Aplicativo de tarefas</h3>
                <p>
                  Aplicação para criar, organizar, concluir e acompanhar
                  tarefas do dia a dia.
                </p>
              </article>

            </div>
          </div>
        </section>

        <section className="secao chamada" id="inscricao">
          <div className="conteudo conteudo-chamada">

            <span className="titulo-pequeno">
              SEU PRÓXIMO PASSO
            </span>

            <h2>
              Seu futuro na tecnologia pode começar aqui.
            </h2>

            <p>
              Conheça o curso Técnico em Desenvolvimento de Sistemas
              e comece a construir suas próprias soluções digitais.
            </p>

            <a href="#inicio" className="botao primario">
              Conheça o curso Técnico em Desenvolvimento de Sistemas
            </a>

          </div>
        </section>

      </main>

      <footer className="rodape">
        <div className="conteudo rodape-conteudo">

          <div className="rodape-logo">
            <span className="logo-marca">&lt;/&gt;</span>

            <div>
              <strong>SENAI</strong>
              <small>Desenvolvimento de Sistemas</small>
            </div>
          </div>

          <div className="rodape-texto">
            <p>Técnico em Desenvolvimento de Sistemas</p>
            <p>SENAI • 2026 • Luan Santos</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;