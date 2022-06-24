import './App.css';
import { useEffect, useState } from 'react';
import Login from './components/pages/Login';
import { useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate()

  //check if user is logged in
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(()=>{
    token ? nav('contacts') : nav('login')
  },[])

  return (
    <>
    </>
  );
}

export default App;
