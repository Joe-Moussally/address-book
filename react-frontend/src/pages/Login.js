import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const nav = useNavigate()
    const [token, setToken] = useState('')

    const handleLogin = () => {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        let data = {
            email:email,
            password: password
        }
        axios({
            method:'POST',
            data:data,
            url: 'http://localhost:27017/api/user/login'
        }).then((Response) => {
            localStorage.setItem('token', Response.data)
            nav('/contacts')

        }).catch((err) => {

            document.getElementById('status').innerHTML = 'invalid email or password'
            setTimeout(()=>{
                document.getElementById('status').innerHTML = ''
            },5000)

        })
    }

    return ( 
        <div id="login-container" className="container">
            <h1>Address Book</h1>
            <div id='status'></div>
            <input id="email" type='email' placeholder="example@mail.com"></input>
            <input id="password" type='password' placeholder="password"></input>

            <button id="login-btn" onClick={handleLogin}>Log In</button>

            <div id="or-div">
                <span id="or-span"></span>
                <span id="or">or</span>
                <span id="or-span"></span>
            </div>

            <button id="go-to-signup-btn">Sign Up</button>
        </div>
     );
}
 
export default Login;