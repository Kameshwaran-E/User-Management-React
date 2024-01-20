// App.js
import React, { useState, useEffect } from 'react';
import UserList from './component/UserList';
import UserForm from './component/UserForm';
import NavBar from './component/NavBar';
import SideBar from './component/SideBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [latestUserId, setLatestUserId] = useState(0);
  useEffect(() => {
    // Fetch user data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Convert user IDs to numbers
        const usersWithNumericIds = data.map((user) => ({
          ...user,
          id: parseInt(user.id, 10),
        }));
        setUsers(usersWithNumericIds);

        // Find the maximum user ID to set the latest user ID
        const maxUserId = Math.max(
          ...usersWithNumericIds.map((user) => user.id),
          0
        );
        setLatestUserId(maxUserId);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    // Filter users based on search term
    const filtered = users.filter((user) => {
      const search = searchTerm.toLowerCase();
      return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
      );
    });
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleFormSubmit = (newUser) => {
    // Ensure the new user's ID is a number
    const newUserId = parseInt(newUser.id, 10);
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: newUserId }]);
    setLatestUserId((prevLatestUserId) => prevLatestUserId + 1);
  };

  return (
    <div>
      <SideBar />
      <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <UserList users={filteredUsers} />
      <UserForm onFormSubmit={handleFormSubmit} latestUserId={latestUserId} />
    </div>
  );
};

export default App;
