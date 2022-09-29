import "./header.css"

const Header = () => {
    return (
			<div className="header">
				<div className="hTitles">
					<span className="hTSmall">MERN APP</span>
					<span className="hTLarge">Blog</span>
				</div>
				<img
					className ="hImg"
					src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="headerImage"
					srcset=""
				/>
			</div>
		);
}

export default Header