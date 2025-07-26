import { useState } from 'react';
import './index.css';

export const LoginForm = () => {
  const [login , setLogin] = useState({
    username:"",
    password:"",
  })

  const hendleLoginData = (e) =>{
      const {name , value} = e.target;
      setLogin((prev) => ({
        ...prev , 
        [name] : value
      }))
  }

  
  const handleFormSubmit = (e) =>{
     e.preventDefault()
     console.log(login)
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          autoComplete='off'
          value={login.username}
          onChange={hendleLoginData}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          autoComplete='off'
          value={login.password}
          onChange={hendleLoginData}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
