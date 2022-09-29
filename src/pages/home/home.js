import Header from '../../components/header/header'
import Posts from '../../components/posts/posts'
import Sidebar from '../../components/sidebar/sidebar'
import './home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home