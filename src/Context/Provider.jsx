import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import gitUsers from '../Service/gitUsers';

export const Context = createContext();

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [isClicked, setIsClicked] = useState('');

  useEffect(() => {
    setIsFetching(true);

    const fetchUsers = async () => {
      const response = await gitUsers();
      setAllUsers(response.data);
      setIsFetching(false);
    };

    fetchUsers();
  }, []);

  const ContextValue = {
    isFetching,
    setIsFetching,
    allUsers,
    setAllUsers,
    isClicked,
    setIsClicked,
  };

  return (
    <Context.Provider value={ContextValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};
