// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'

const overlayStyles = {
  backgroundColor: '#fff',
}
const Header = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="nav-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="logo"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
        position="right center"
        overlayStyle={overlayStyles}
      >
        {close => (
          <div className="model-container">
            <button
              className="close-button"
              data-testid="closeButton"
              type="button"
              onClick={() => {
                close()
              }}
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="popup-container">
              <ul className="list-container">
                <li className="list-item">
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => {
                      close()
                    }}
                  >
                    <AiFillHome className="home-icon" />
                    <h1 className="nav-item">Home</h1>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={() => {
                      close()
                    }}
                  >
                    <BsInfoCircleFill className="about-icon" />
                    <h1 className="nav-item">About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Popup>
    </div>
    <hr className="separator" />
  </nav>
)

export default Header
