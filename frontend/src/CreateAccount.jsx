// src/components/CreateAccount.jsx
import React from 'react';
import './CreateAccount.css'; // Create a CSS file for styling if needed

const CreateAccount = () => {
  return (
    <div className="create-account">
      <h2>Create an Account</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default CreateAccount;
