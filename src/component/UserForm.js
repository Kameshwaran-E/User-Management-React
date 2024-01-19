// UserForm.js
import React, { useState } from 'react';

import './UserForm.css';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="login">
          <div className="login__field">
            <input
              className="login__input"
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <input
            className="login__input"
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="login__input"
            type="tel"
            value={phone}
            placeholder="Enter Phone number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
