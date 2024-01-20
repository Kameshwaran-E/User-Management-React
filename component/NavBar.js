import React from 'react';
import './NavBar.css';
import people from '../asset/img/people.png';

const NavBar = ({ searchTerm, onSearchChange }) => {
  return (
    <>
      <section id="content">
        <nav>
          <h1>User Management System</h1>
          <form action="#">
            <div class="form-input">
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button type="#" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>

          <a href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src={people} />
          </a>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
