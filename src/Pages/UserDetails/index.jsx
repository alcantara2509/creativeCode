import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import userDetails from '../../Service/userDetails';
import { SideMenu, Header } from '../../Components';
import Loading from '../../Components/Loading';
import isLogged from '../../utils/isLogged';
import './style.css';

function UserDetails() {
  const { pathname } = useLocation();
  const userLogin = pathname.split('/')[2];
  const [userInfo, setUserInfo] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    const getUserDetails = async () => {
      const info = await userDetails(userLogin);
      setUserInfo(info.data);
      setIsFetching(false);
    };

    getUserDetails();
  }, []);

  if (!isLogged()) return <Redirect to="/login" />;
  return (
    <main className="user-details-container">
      <SideMenu />
      <section className="search-content">

        <Header headerTitle="" />
        <section className="user-overview-container">
          <Link to="/search" className="details-back">&lt; voltar para busca</Link>
          {
      isFetching ? <Loading />
        : (
          <section className="user-overview-wrapper">
            <img src={userInfo.avatar_url} alt="user avatar" className="user-details-avatar" />
            <section className="user-info-content">
              <h2 className="details-user-name">{userInfo.name}</h2>
              <h3 className="details-info-text">{userLogin}</h3>
              <br />
              <p className="details-info-text">
                {userInfo.followers}
                {' '}
                Seguidores
              </p>
              <p className="details-info-text">
                {userInfo.following}
                {' '}
                Seguindo
              </p>
              <a href={`${userInfo.html_url}?tab=repositories`} target="blank" className="details-info-text">
                {userInfo.public_repos}
                {' '}
                Repositórios
              </a>
              <p className="details-info-text">{userInfo.location}</p>
              <br />
              <br />
              <p>
                <a href={userInfo.blog} target="blank" className="details-user-name">
                  {userInfo.blog}
                </a>
              </p>
            </section>
            <section className="git-button-container">
              <a href={userInfo.html_url} target="blank" className="user-card-button">
                Ver GitHub
              </a>
            </section>
          </section>
        )
      }
        </section>
      </section>
    </main>
  );
}

export default UserDetails;
