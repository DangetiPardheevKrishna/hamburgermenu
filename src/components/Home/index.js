// Write your code here
import './index.css'
import Header from '../Header/index'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-image-mobile"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-image-desktop"
        alt="home"
      />
    </div>
  </>
)
export default Home
