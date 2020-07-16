import React, { useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import './App.css';
import { userInfo } from 'os';

const App = () => {

  const [user, setUser] = useState('');
  const [userInformation, setUserInformation] = useState(null);
  
  const onLogout = (event) => {
		event.preventDefault(); 
    setUser('');
	};

  return (
    <div>
      {(user === '') && 
        <Home setUserCallback = { setUser } setUserInformationCallback = { setUserInformation } />
      }
      {(user !== '') &&  (userInformation !== null) &&
        <Dashboard onLogoutCallback = { onLogout } currentUser={ user } setUserInformationCallback = { setUserInformation } userInformation = { userInformation } />
      }
    </div>
  );
};

export default App;
