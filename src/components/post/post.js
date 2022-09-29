import './post.css'

const Post = ({img}) => {
    return (
			<div className="post">
				<img className="pImg" src={img} alt="propsImg" />
				<div className="pInfo">
					<div className="pCategories">
						<span className="pCategory">Music</span>
						<span className="pCategory">Life</span>
					</div>
					<span className="pTitle">Lorem ipsum dolor sit amet</span>

					<hr />

					<span className="pDate">1 hour ago</span>
				</div>
				<p className="pDescription">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
					officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
					fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
					atque, exercitationem quibusdam, reiciendis odio laboriosam?
				</p>
			</div>
		);
}

export default Post