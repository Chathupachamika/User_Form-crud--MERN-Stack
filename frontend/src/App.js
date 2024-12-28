import './App.css';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';


function App() {

  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate('/users');
    }, 800);
  };

  return (
    <div className="App">
      <h1>Welcome to PSR</h1>
      <button className='users-button' onClick={handleButtonClick}>Users</button>
      {
        showAlert && (
          <Alert severity="success" style={{
            marginTop: '-150px',
            width: '200px',
            alignContent: 'center',
          }}>
            Welcome To PSR UserForm !
          </Alert>
        )
      }
    </div>
  );
}

export default App;
