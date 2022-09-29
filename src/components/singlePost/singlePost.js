import './singlePost.css'

const SinglePost = () => {
    return (
			<div className="singlePost">
				<div className="sPWrapper">
					<img
						className="sPImg"
						src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
					/>
					<h1 className="sPTitle">
						Lorem ipsum dolor
						<div className="sPEdit">
							<i className="far fa-edit sPIcon"></i>
							<i className="far fa-trash-alt sPIcon"></i>
						</div>
					</h1>
					<div className="sPInfo">
						<span>
							Author:
							<strong className="sPAuthor">Adekunle Stephen</strong>
						</span>
						<span>1 day ago</span>
					</div>
					<p className="sPDescription">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
						quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
						Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
						eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
						error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
						impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
						odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
						iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
						voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
						eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
						adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
						doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
						eum beatae, adipisci voluptas a odit modi eos!
						<br />
						<br />
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
						quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
						Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
						eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
						error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
						impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
						odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
						iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
						voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
					</p>
				</div>
			</div>
		);
}

export default SinglePost