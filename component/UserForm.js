// UserForm.js
import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ onFormSubmit, latestUserId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: latestUserId + 1, // Increment the latest user ID
      name,
      email,
      phone,
    };
    onFormSubmit(newUser);

    setName('');
    setEmail('');
    setPhone('');
    alert('New user Added');
  };

  return (
    <section id="user-form">
      <div className="head">
        <h2>Add New User</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="todo-list">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add User</button>
        </div>
      </form>
    </section>
  );
};

export default UserForm;
