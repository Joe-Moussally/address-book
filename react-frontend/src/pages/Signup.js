import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {

    const nav = useNavigate()

    const handleSignup = () => {
        let email = document.getElementById('email').value
        let name = document.getElementById('name').value
        let p1 = document.getElementById('p1').value
        let p2 = document.getElementById('p2').value

        if(email==''|| p1==''|| p2==''||name=='') {
            document.getElementById('status').innerHTML="Please fill all fields"
            setTimeout(
                () => document.getElementById('status').innerHTML=""
            ,4000)
            return
        }
        if (p1!=p2) {
            document.getElementById('status').innerHTML="Passwords don't match"
            setTimeout(
                () => document.getElementById('status').innerHTML=""
            ,4000)
            return        }
        
        let body = {
            email:email,
            password: p1,
            name:name
        }
        console.log(body)
        axios({
            method: 'POST',
            data: body,
            url: 'http://localhost:27017/api/user/register'
        }).then((Response) =>{
            console.log(Response.data)
            localStorage.setItem('token',Response.data.token)
            nav('/contacts')
        })
    }

    return ( 
        <div id="login-container" className="container">
            <h1>Sign Up</h1>
            <div id='status'></div>
            <input id="email" type='email' placeholder="example@mail.com"></input>
            <input type="text" placeholder="Username" id="name"></input>
            <input id="p1" type='password' placeholder="password"></input>
            <input id="p2" type='password' placeholder="password"></input>

            <button id="login-btn"
            onClick={handleSignup}>Sign Up</button>

            <div id="or-div">
                <span id="or-span"></span>
                <span id="or">or</span>
                <span id="or-span"></span>
            </div>

            <button id="go-to-signup-btn"
            onClick={() => nav('/login')}
            >Login</button>
        </div>
     );
}
 
export default Signup;