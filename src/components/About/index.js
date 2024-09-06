// Write your code here
import './index.css'
import Header from '../Header/index'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="about-image-mobile"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="about-image-desktop"
        alt="about"
      />
    </div>
  </>
)

export default About
