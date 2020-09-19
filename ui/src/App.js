import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ProfileContextProvider } from './hooks/useProfile';
import Home from './views/Home';

function App() {
  return (
    <ProfileContextProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </ProfileContextProvider>
  );
}

export default App;
