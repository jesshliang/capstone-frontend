import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {

  const [user, setUser] = useState('');
  
  const onLogout = (event) => {
		event.preventDefault(); 
    setUser('');
		console.log(user);
	};

//   <Router>
//   <div>
//     {/* A <Switch> looks through its children <Route>s and
//         renders the first one that matches the current URL. */}
//     <Switch>
//       <Route path="/" onLoginCallBack={ onLogin } render={ props => <Home { ...props } user={ user.toString() } onLoginCallBack={ onLogin } />} >
//         <Home />
//       </Route>
//       <Route path="/map-page">
//         <MapPage onLogoutCallback = { onLogout } />
//       </Route>
//     </Switch>
//   </div>
// </Router>
  return (
    <div>


      {(user === '') && 
        <Home setUserCallback = { setUser } />
      }
      {(user !== '') && 
        <Dashboard onLogoutCallback = { onLogout } currentUser={ user } />
      }
    </div>
  );
};

export default App;
