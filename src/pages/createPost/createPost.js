import './createPost.css'

const CreatePost = () => {
    return (
        <div className="createPost">
            <img
                className="cPImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="cPForm">
                <div className="cPFGroup">
                    <label htmlFor="fileInput">
                        <i className="cPIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="cPInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="cPFGroup">
                    <textarea
                        className="cPInput cPText"
                        placeholder="Tell your story..."
                        type="text"
                    autoFocus={true}
					/>
				</div>
				<button className="cPSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
}

export default CreatePost 