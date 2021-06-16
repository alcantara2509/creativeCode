import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Provider';

function Home() {
  const { isFetching, allUsers } = useContext(Context);
  const [search, setSearch] = useState('');
  const [filterUsers, setFilterUsers] = useState(allUsers);

  useEffect(() => {
    if (search.length === 0) setFilterUsers(allUsers);
    setFilterUsers(allUsers.filter((e) => e.login.includes(search)));
  }, [isFetching, search]);

  const renderUsers = () => filterUsers.map((user) => (
    <Link to={`/users/${user.login}`} key={user.id}>
      <img src={user.avatar_url} alt="avatar do usuário" />
      <p>{user.login}</p>
    </Link>
  ));

  return (
    <>
      <h1>Home</h1>
      <input type="text" onChange={({ target }) => setSearch(target.value)} />
      {
        isFetching ? <p>loading...</p> : renderUsers()
      }
    </>
  );
}

export default Home;
