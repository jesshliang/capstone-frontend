import React, { useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {

  const [user, setUser] = useState('');
  const [userInformation, setUserInformation] = useState(null);
  
  const onLogout = (event) => {
		event.preventDefault(); 
    setUser('');
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
        <Home setUserCallback = { setUser } setUserInformationCallback = { setUserInformation } />
      }
      {(user !== '') &&  (userInformation !== null) &&
        <Dashboard onLogoutCallback = { onLogout } currentUser={ user } setUserInformationCallback = { setUserInformation } userInformation = { userInformation } />
      }
    </div>
  );
};

export default App;
