import React from "react";
import styles from "./titulos.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";
import Section from "../components/section";

export default function Titulos() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Section title="Conquistas Principais">
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Mundial de Clubes da FIFA 2012"
            titulo="Mundial de Clubes da FIFA"
            ano={2012}
            detalhes="Corinthians 1 x 0 Chelsea"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu da Copa Libertadores da América 2012"
            titulo="Copa Libertadores da América"
            ano={2012}
            detalhes="Corinthians 2 x 0 Boca Juniors"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu da Copa Libertadores da América 2000"
            titulo="Mundial de Clubes da FIFA"
            ano={2000}
            detalhes="Corinthians 0(4) x 0(3) Vasco"
          />
        </Section>

        <Section title="Campeonatos Brasileiros">
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Campeonato Brasileiro 2017"
            titulo="Campeonato Brasileiro"
            ano={2017}
            detalhes="7º título brasileiro"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Campeonato Brasileiro 2015"
            titulo="Campeonato Brasileiro"
            ano={2015}
            detalhes="6º título brasileiro"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Campeonato Brasileiro 2011"
            titulo="Campeonato Brasileiro"
            ano={2011}
            detalhes="5º título brasileiro"
          />
        </Section>

        <Section title="Campeonatos Estaduais">
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Campeonato Paulista 2023"
            titulo="Campeonato Paulista"
            ano={2023}
            detalhes="30º título estadual"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Campeonato Paulista 2019"
            titulo="Campeonato Paulista"
            ano={2019}
            detalhes="29º título estadual"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu do Campeonato Paulista 2018"
            titulo="Campeonato Paulista"
            ano={2018}
            detalhes="28º título estadual"
          />
        </Section>

        <Section title="Outras Conquistas">
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu da Copa do Brasil 2009"
            titulo="Copa do Brasil"
            ano={2009}
            detalhes="Corinthians 2 x 0 Internacional"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu da Recopa Sul-Americana 2013"
            titulo="Recopa Sul-Americana"
            ano={2013}
            detalhes="Corinthians 3 x 1 São Paulo"
          />
          <Card
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            textoAlt="Troféu da Copa do Brasil 2002"
            titulo="Copa do Brasil"
            ano={2002}
            detalhes="Corinthians 3 x 2 Brasiliense"
          />
        </Section>
      </main>

      <Footer />
    </div>
  );
}