import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import MapPage from './components/MapPage';
import './App.css';

const App = () => {

  const [user, setUser] = useState(false);
  
  const onLogout = (event) => {
		event.preventDefault(); 
    setUser(false);
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


      {(user === false) && 
        <Home setUserCallback = { setUser } />
      }
      {(user === true) && 
        <MapPage onLogoutCallback = { onLogout } />
      }
    </div>
  );
};

export default App;
