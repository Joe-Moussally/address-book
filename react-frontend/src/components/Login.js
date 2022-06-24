const Login = () => {
    return ( 
        <div id="login-container" className="container">
            <h1>Address Book</h1>
            <input id="email" type='email' placeholder="example@mail.com"></input>
            <input id="password" type='password' placeholder="password"></input>

            <button id="login-btn">Log In</button>

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