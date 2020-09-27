import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ProfileContextProvider } from './hooks/useProfile';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Register from './views/Register';
import User from './views/User';

function App() {
  return (
    <ProfileContextProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/u/:id" component={User} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </ProfileContextProvider>
  );
}

export default App;
