import Sidebar from '../../components/sidebar/sidebar'
import SinglePost from '../../components/singlePost/singlePost'
import './single.css'

const Single = () => {
    return (
        <div className = "single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single