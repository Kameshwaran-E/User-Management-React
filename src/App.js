// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './component/UserForm';
import UserList from './component/UserList';
import SearchBar from './component/SearchBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setFilteredUsers([...filteredUsers, { ...newUser, id: users.length + 1 }]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <h1>User Management App</h1>
      <UserForm addUser={addUser} />
      <SearchBar onSearch={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
