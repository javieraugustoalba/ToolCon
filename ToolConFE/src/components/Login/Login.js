import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { UseLogin } from '../Api/login-api'; // Adjust the path as necessary
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setLoginError('Username and password are required.');
      return;
    }

    setLoginError('');

    const result = await UseLogin(username, password);

    if (result.success) {
      console.log('Login successful:', result.data);
      localStorage.setItem('userToken', result.data.token);
      navigate('/Dashboard');
    } else {
      console.error(result.error);
      setLoginError(result.error);
    }
  };

  return (
    <div className='catalog1'>
      <h2 className='logo'>ToolCon</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className='specification'>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            pattern="[a-zA-Z0-9]+" title="Solo se permiten letras y números"
            maxLength={50}
            className='rectangle1 texto login-input'
            placeholder="usuario"
          />

          <br />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="[a-zA-Z0-9]+" title="Solo se permiten letras y números"
            maxLength={50}
            className='rectangle2 texto login-input'
            placeholder="password"
          />

        </div>
        <br />
        <button type="submit" className='buttonRental fullWidthButton ingresar login-button' onClick={handleLogin}>
          Ingresar
        </button>
      </form>
      {loginError && <div className='loginError'>{loginError}</div>}
    </div>
  );
}

export default Login;