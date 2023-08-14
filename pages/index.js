import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Bem-vindo ao Nosso Site Religioso</h1>
      </header>
      <main>
        <section className="about">
          <h2>Sobre Nós</h2>
          <p>
            Somos uma comunidade dedicada à fé e espiritualidade, buscando inspiração e orientação em nossa jornada espiritual.
          </p>
        </section>
        <section className="teachings">
          <h2>Ensinamentos</h2>
          <p>
            Nossos ensinamentos são baseados em valores e princípios fundamentais que nos guiam na busca por uma vida significativa e conectada com o divino.
          </p>
        </section>
        <section className="events">
          <h2>Eventos</h2>
          <p>
            Junte-se a nós em nossos eventos e cerimônias para compartilhar momentos de oração, reflexão e comunhão.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Nosso Site Religioso. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
