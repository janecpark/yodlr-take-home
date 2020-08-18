import React, { useEffect, useState } from 'react';
import UserApi from '../UserApi';
import User from './User';
import './Admin.css';

/**
 * Fetches user data and displays users
 * Sets users active and deletes users
 */

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await UserApi.getUsers();
      setUsers(result);
    }
    fetchData();
  }, []);

  async function deleteUserApi(id) {
    await UserApi.deleteUser(id);
    setUsers((u) => u.filter((user) => user.id !== id));
  }

  async function setActiveApi(id) {
    let user = users
      .filter((u) => u.id === id)
      .map((u) => (u.state === 'pending' ? { ...u, state: 'active' } : u));

    let resp = await UserApi.setActive(id, user[0]);
    setUsers((user) =>
      user.map((u) => (u.id === resp.id ? { ...u, state: resp.state } : u))
    );
  }

  const displayUser = users.map((u) => (
    <User
      key={u.id}
      firstName={u.firstName}
      lastName={u.lastName}
      email={u.email}
      id={u.id}
      state={u.state}
      setActive={setActiveApi}
      deleteUser={deleteUserApi}
    />
  ));

  return (
    <div className="Admin">
      <h1>Yodlr Admin Page</h1>
      <div className="User-Container m-4">{displayUser}</div>
    </div>
  );
};

export default Admin;
