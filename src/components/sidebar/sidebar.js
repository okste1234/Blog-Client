import './sidebar.css'

const Sidebar = () => {
    return (
			<div className="Sidebar">
				<div className="sItem">
					<span className="sTitle">ABOUT ME</span>
					<img
					src="https://cdn.pixabay.com/photo/2017/03/02/23/30/birds-blue-cut-glass-2112753_960_720.png"
						alt="sidebarImg"
					/>
					<p>
						Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
						amet ex esse.Sunt eu ut nostrud id quis proident.
					</p>
				</div>
				<div className="sItem">
					<span className="sTitle">CATEGORIES</span>
					<ul className="sList">
						<li className="sLItem">Life</li>
						<li className="sLItem">Music</li>
						<li className="sLItem">Sport</li>
						<li className="sLItem">Tech</li>
						<li className="sLItem">Style</li>
						<li className="sLItem">Cinema</li>
					</ul>
				</div>
				<div className="sItem">
					<span className="sTitle">FOLLOW ME</span>
					<div className="sSocial">
						<i className="fab fa-facebook-square sSocialIcon"></i>
						<i className="sidebarIcon fab fa-instagram-square sSocialIcon"></i>
						<i className="fab fa-pinterest-square sSocialIcon"></i>
						<i className="fab fa-twitter-square sSocialIcon"></i>
					</div>
				</div>
			</div>
		);
}

export default Sidebar