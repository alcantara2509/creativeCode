import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Provider';
// import { MainTitle } from '../../Styles/Texts';
// import Colors from '../../Styles/Colors';
import { SideMenu, Header } from '../../Components';
import { iconBusca } from '../../Styles/Assets';
import './style.css';

function Search() {
  const { isFetching, allUsers } = useContext(Context);
  const [search, setSearch] = useState('');
  const [filterUsers, setFilterUsers] = useState(allUsers);

  useEffect(() => {
    if (search.length === 0) setFilterUsers(allUsers);
    setFilterUsers(allUsers.filter(
      (e) => e.login.toLowerCase().includes(search.toLocaleLowerCase()),
    ));
  }, [isFetching, search]);

  const renderUsers = () => filterUsers.map((user) => (
    <section className="user-card">
      <img src={user.avatar_url} alt="avatar do usuário" className="user-avatar" />
      <section className="user-card-info">
        <h3 className="user-card-login">{user.login}</h3>
        <Link to={`/users/${user.login}`} key={user.id} className="user-card-button">
          ver perfil
        </Link>
      </section>
    </section>
  ));

  return (
    <main className="search-container">
      <SideMenu />
      <section className="search-content">
        <Header headerTitle="Buscar usuários" />
        <section className="content-wrapper">
          <section className="input-search-container">
            <section className="input-search-wrapper">
              <input
                type="text"
                onChange={({ target }) => setSearch(target.value)}
                className="input-search"
              />
              <img src={iconBusca} alt="icone de busca" className="input-search-icon" />
            </section>
          </section>
          <section className="users-container">
            {isFetching ? <p>loading...</p> : (
              <section className="users-cards-container">
                { renderUsers()}
              </section>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Search;
