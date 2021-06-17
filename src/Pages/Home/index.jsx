import React from 'react';
import { Link } from 'react-router-dom';
import { Header, SideMenu } from '../../Components';
import Colors from '../../Styles/Colors';
import { MainTitle, SubTitle } from '../../Styles/Texts';
import { illustration } from '../../Styles/Assets';
import './style.css';

function Home() {
  return (
    <main className="search-container">
      <SideMenu />
      <section className="search-content">
        <Header headerTitle="" />
        <section className="home-container">
          <section className="home-text">
            <MainTitle textColor={Colors.mainTitle}>
              Bem vindo!
            </MainTitle>
            <br />
            <SubTitle textColor={Colors.subTitle}>
              Explore nossa plataforma
              <br />
              e encocntre outros
              <br />
              usuários do GitHub!
            </SubTitle>
            <br />
            <br />
            <Link to="/search" className="user-card-button">
              Buscar usuários
            </Link>
          </section>
          <section className="home-image">
            <img src={illustration} alt="" />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;
