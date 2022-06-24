import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';

function App() {

  //check if user is logged in
  const [token, setToken] = useState('')

  return (

    token ? <>Home</> : <Login />
  );
}

export default App;
