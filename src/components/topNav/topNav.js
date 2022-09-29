import { Link } from "react-router-dom";
import "./topNav.css"

const TopNav = () => {
	const currentUser = true;

    return (
			<div className="top">
				<div className="tLeft">
					<i className="fab fa-facebook-square tIcon"></i>
					<i className="fab fa-instagram-square tIcon"></i>
					<i className="fab fa-pinterest-square tIcon"></i>
					<i className="fab fa-twitter-square tIcon"></i>
				</div>
				<div className="tCenter">
					<ul className="tList">
					<li className="tLItem">
						<Link className="allLink" to='/'>Home</Link>
					</li>
					<li className="tLItem">
						<Link className="allLink" to='/about'>About</Link>
					</li>
					<li className="tLItem">
						<Link className="allLink" to='/createpost'>Create-Post</Link>
					</li>
					{currentUser
						&&
					(<li className="tLItem">
						<Link className="allLink" to='/login'>Logout</Link>
					</li>)}
					</ul>
				</div>
				<div className="tRight">
				{currentUser ?
					<Link className="allLink" to="/settings">
						<img
							className="tImg"
							src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="img"
							srcset=""
						/>
					</Link>
					:
					(
						<ul className="tList">
							<li className="tLItem">
								<Link className="allLink" to="/login">
									Login
								</Link>
							</li>
							<li className="tLItem">
								<Link className="allLink" to="/signup">
									Signup
								</Link>
							</li>
						</ul>
					)}
					<i className="fas fa-search tSearchIcon"></i>
				</div>
			</div>
		);
}

export default  TopNav