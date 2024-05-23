import React from 'react';
import LinkButton from '../components/LinkButton';
import '../components/css/About.css'

const AboutScreen: React.FC = () => {
  return (
    <div className="container">
      <div className="containerMenor">
        <div>
          <h1 className="title">EQUIPE DE DESENVOLVEDORES</h1>




          <hr className="divisor" />







          <img className="profile-image" src="src/assets/mateus.jpg" alt="Mateus Zuvanov" />
          <div>
            <h2 className="title1">Mateus Zuvanov</h2>
            <p className="description">
              {/* Descrição Mateus */}
            </p>
          </div>

          <div className="links-container">
            <LinkButton url="https://github.com/" iconClass="fab fa-github" />
            <LinkButton url="https://www.linkedin.com/in/" iconClass="fab fa-linkedin" />
          </div>





          <hr className="divisor" />






          <img className="profile-image" src="src/assets/miguel.jpg" alt="Miguel Araujo" />
          <div>
            <h2 className="title1">Miguel Araujo</h2>
            <p className="description">
              Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver, além disso um homem muito esbelto.
            </p>
          </div>

          <div className="links-container">
            <LinkButton url="https://github.com/Mig2445465" iconClass="fab fa-github" />
            <LinkButton url="https://www.linkedin.com/in/miguel-araujo-7a37b8247/" iconClass="fab fa-linkedin" />
          </div>





          <hr className="divisor" />






          <img className="profile-image" src="src/assets/miguelm.jpg" alt="Miguel Milagres" />
          <div>
            <h2 className="title1">Miguel Milagres</h2>
            <p className="description">
              {/* Descrição Miguel */}
            </p>
          </div>

          <div className="links-container">
            <LinkButton url="https://github.com/miguelmilagres" iconClass="fab fa-github" />
            <LinkButton url="https://www.linkedin.com/in/" iconClass="fab fa-linkedin" />
          </div>





          <hr className="divisor" />





          <img className="profile-image" src="src/assets/pedro.jpg" alt="Pedro Henrique" />
          <div>
            <h2 className="title1">Pedro Henrique</h2>
            <p className="description">
              Aluno de Engenharia de Computação no CEFET Petrópolis e residente no Serratec/Senac. Atualmente procurando desenvolver minhas habilidades em desenvolvimento de softwares.
            </p>
          </div>

          <div className="links-container">
            <LinkButton url="https://github.com/PedroHenriqueBRibeiro" iconClass="fab fa-github" />
            <LinkButton url="https://www.linkedin.com/in/pedro-henrique-39aab8282/" iconClass="fab fa-linkedin" />
          </div>





          <hr className="divisor" />





          <img className="profile-image" src="src/assets/flavio.jpg" alt="Flávio Lourenço" />
          <div>
            <h2 className="title1">Flávio Lourenço</h2>
            <p className="description">
              Flávio Lourenço, apaixonado por tecnologia desde a infância, atualmente migrando para uma carreira em desenvolvimento de software Full Stack. No Senac, estou aprimorando minhas habilidades técnicas e comportamentais, construindo seu futuro com determinação e entusiasmo.
            </p>
          </div>

          <div className="links-container">
            <LinkButton url="https://github.com/LourencoFilho-Dev/" iconClass="fab fa-github" />
            <LinkButton url="https://www.linkedin.com/in/lourencofilho-dev/" iconClass="fab fa-linkedin" />
          </div>





          <hr className="divisor" />





          <h2 className="title1">Sobre o Site</h2>
          <p className="description">
            Aplicativo criado com React-Vite para demonstrar habilidades de desenvolvimento React Web através de um projeto de Ecommerce.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
