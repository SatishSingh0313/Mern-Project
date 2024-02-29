import { Link, useNavigate } from 'react-router-dom'
import shop from "../shop.jpg"

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('signup')
    }
   
    return (
        <div>
            <img src={shop} alt="logo" className="logo" />
            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products </Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/list">Update Products</Link></li>
                <li><Link to="/profile">Profile </Link></li>
                <li ><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className='nav-ul'>
                    <li> <Link to="/signup">Sign Up </Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;