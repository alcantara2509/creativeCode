import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import userDetails from '../../Service/userDetails';

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
  console.log(userInfo);
  return (
    isFetching ? <p>loading...</p>
      : (
        <>
          <img src={userInfo.avatar_url} alt="user avatar" />
          <h2>{userInfo.name}</h2>
          <p>
            login:
            {' '}
            {userLogin}
          </p>
          <p>
            blog:
            {' '}
            <a href={userInfo.blog} target="blank">
              {userInfo.blog}
            </a>
          </p>
          <p>
            {userInfo.followers}
            {' '}
            Seguidores
          </p>
          <p>
            {userInfo.following}
            {' '}
            Seguindo
          </p>
          <a href={`${userInfo.html_url}?tab=repositories`} target="blank">
            {userInfo.public_repos}
            {' '}
            Repositórios
          </a>
          <a href={userInfo.html_url} target="blank">
            Ver Perfil no GitHub
          </a>
        </>
      )
  );
}

export default UserDetails;
