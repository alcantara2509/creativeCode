import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import userDetails from '../../Service/userDetails';

function UserDetails() {
  const { pathname } = useLocation();
  const userLogin = pathname.split('/')[2];
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      const info = await userDetails(userLogin);
      setUserInfo(info.data);
    };

    getUserDetails();
  }, []);

  return (
    <>
      <h1>{userLogin}</h1>
      <img src={userInfo.avatar_url} alt="sdf" />
    </>
  );
}

export default UserDetails;
