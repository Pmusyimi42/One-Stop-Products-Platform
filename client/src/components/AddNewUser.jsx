import React from 'react';
import './AddNewUser.css';

export default function AddNewUser() {
  return (
    <div className="container">
      <h1 className="add-user-title">Add New User</h1>
      <p className="add-user-subtitle">Create a brand new user and add them to the site</p>

      <form className="add-user-form">
        <div className="add-user-form-row">
          <label htmlFor="username" className="add-user-label">Username</label>
          <input type="text" className="add-user-input" id="username" />
        </div>
        <div className="add-user-form-row">
          <label htmlFor="email" className="add-user-label">Email address</label>
          <input type="email" className="add-user-input" id="email" />
        </div>
        <div className="add-user-form-row">
          <label htmlFor="password" className="add-user-label">Password</label>
          <input type="password" className="add-user-input" id="password" />
        </div>
        <div className="add-user-form-row">
          <label htmlFor="role" className="add-user-label">Role</label>
          <select className="add-user-select" aria-label="Default select example" id="role">
            <option selected>Choose Role</option>
            <option value="1">Admin</option>
            <option value="2">Seller</option>
          </select>
        </div>
        <div className="add-user-form-row">
          <label htmlFor="address" className="add-user-label">Address</label>
          <input type="text" className="add-user-input" id="address" />
        </div>
        <div className="add-user-form-row">
          <button type="submit" className="add-user-button">Add User</button>
        </div>
      </form>
    </div>
  );
}
