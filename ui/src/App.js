import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthOnly from './components/AuthOnly/AuthOnly';
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/u/:id">
            <User />
          </Route>
          <Route path="/profile">
            <AuthOnly waitLoading redirect="/login">
              <Profile />
            </AuthOnly>
          </Route>
          <Route path="/login">
            <AuthOnly waitLoading reversed redirect="/">
              <Login />
            </AuthOnly>
          </Route>
          <Route path="/register">
            <AuthOnly waitLoading reversed redirect="/">
              <Register />
            </AuthOnly>
          </Route>
        </Switch>
      </div>
    </ProfileContextProvider>
  );
}

export default App;
