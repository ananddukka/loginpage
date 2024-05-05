import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

const Home = () => (
  <div className="home-container">
    Render UserInfo and BlogList
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
