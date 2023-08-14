function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Ensinamentos</a></li>
            <li><a href="#">Eventos</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Bem-vindo ao Nosso Site Religioso</h1>
          <p>Encontre inspiração espiritual e orientação em nossa comunidade.</p>
        </section>
        <section>
          <h2>Sobre Nós</h2>
          <p>Somos uma comunidade dedicada à fé e espiritualidade, buscando inspiração e orientação em nossa jornada espiritual.</p>
        </section>
        <section>
          <h2>Ensinamentos</h2>
          <p>Nossos ensinamentos são baseados em valores e princípios fundamentais que nos guiam na busca por uma vida significativa e conectada com o divino.</p>
        </section>
        <section>
          <h2>Eventos</h2>
          <p>Junte-se a nós em nossos eventos e cerimônias para compartilhar momentos de oração, reflexão e comunhão.</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Nosso Site Religioso. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}


export default Home