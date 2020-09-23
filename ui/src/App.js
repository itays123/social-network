import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ProfileContextProvider } from './hooks/useProfile';
import Home from './views/Home';
import Profile from './views/Profile';
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
        </Switch>
      </div>
    </ProfileContextProvider>
  );
}

export default App;
