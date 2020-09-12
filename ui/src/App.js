import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    User {
      _id
      name
    }
  }
`;

function App() {
  const { data } = useQuery(GET_USERS);
  console.log(data.User);
  return (
    <div className="App">
      <h1>data is fetched!</h1>
    </div>
  );
}

export default App;
