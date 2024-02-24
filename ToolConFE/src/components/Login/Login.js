import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Check if username or password fields are empty
    if (!username || !password) {
      setLoginError('Username and password are required.'); // Set error message
      return; // Stop the function if validation fails
    }
  
    setLoginError(''); // Clear any existing error messages
  
    const loginUrl = 'https://localhost:7238/login';
  
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json(); // Decode JSON response
        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }
        console.log('Login successful:', data);
        localStorage.setItem('userToken', data.token); // Assuming token is received
        navigate('/Dashboard'); // Redirect to Dashboard on success
      } else {
        // Handle non-JSON responses (e.g., plain text)
        const textData = await response.text(); // Decode text response
        throw new Error(textData || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      setLoginError(error.message); // Display error message
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
                className='rectangle1 texto'
                placeholder="usuario"
                />
                
                <br/>

                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern="[a-zA-Z0-9]+" title="Solo se permiten letras y números"
                maxLength={50}
                className='rectangle2 texto'
                placeholder="password"
                />

            </div>
            <br/>
            <button type="submit" className='buttonRental fullWidthButton ingresar' onClick={handleLogin}>
            Ingresar
            </button>
            </form>
            {loginError && <div className='loginError'>{loginError}</div>} 
        </div>
    );
  }

export default Login;