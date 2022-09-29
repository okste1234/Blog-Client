import { Link } from 'react-router-dom'
import './signup.css'

const Signup = () => {
    return (
        <div className="signup">
            <span className="sTitle">Register</span>
            <form className="sForm">
                <label>Username</label>
                <input className="sInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input className="sInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="sInput" type="password" placeholder="Enter your password..." />
                <button className="sBtn">Signup</button>
            </form>
            <button className="sLoginBtn">
                <Link className='allLink' to="/login">
                    LOGIN
                </Link>
            </button>
        </div>
    )
}

export default Signup