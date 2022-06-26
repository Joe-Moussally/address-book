import { useNavigate } from "react-router-dom"

const Nav = () => {

    const nav = useNavigate()

    const handleLogout = () => {
        nav('/login')
        localStorage.setItem('token',null)
    }

    return ( 
        <div id="nav-container">
            <button id="add-contact-btn" onClick={() => nav('/add')}>Add Contact</button>
            <button id="logout-btn" onClick={handleLogout}>Log Out</button>                
        </div>
     );
}
 
export default Nav;