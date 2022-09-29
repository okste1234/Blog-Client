import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <span className="lTitle">Login</span>
            <form className="lForm">
                <label>Email</label>
                <input className="lInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="lInput" type="password" placeholder="Enter your password..." />
                <button className="lBtn">Login</button>
            </form>
            <button className="lSignupBtn">
                <Link className='allLink' to="/signup">
                    SIGNUP
                </Link>
            </button>
        </div>
    )
}

export default Login