import "./App.css";
import hamburger1 from "./assets/hamburger1.png";
import profile2 from "./assets/profile2.png";
import notification3 from "./assets/notification3.png";
import calendar4 from "./assets/calendar4.png";
import document5 from "./assets/document5.png";
import download6 from "./assets/download6.png";
import settings7 from "./assets/settings7.png";
import user8 from "./assets/user8.png";
import logo from "./assets/logo.png";
import heroImage from "./assets/heroImage.png";

function App() {
  return (
    <div className="App">
      <div>
        <div className="sidebar-align">
          <div className="sidebar">
            <div className="sidebar-top">
              <img className="icons" src={hamburger1} alt="hamburger1" />
              <img className="icons" src={profile2} alt="profile2" />
              <img className="icons" src={notification3} alt="notification3" />
              <img className="icons" src={calendar4} alt="calendar4" />
              <img className="icons" src={document5} alt="document5" />
              <img className="icons" src={download6} alt="download6" />
            </div>
            <div className="sidebar-bottom">
              <img className="icons" src={settings7} alt="download6" />
              <img className="icons" src={user8} alt="download6" />
            </div>
          </div>
        </div>
        <div className="nav-section">
          <nav className="navbar">
            <img className="logo" src={logo} alt="logo" />

            <div className="links-layout">
              <a href="#Home" className="links">
                Home
              </a>
              <a href="#our-services" className="links">
                OUR SERVICES
              </a>
              <a href="#doctors" className="links">
                DOCTORS
              </a>
              <a href="#about-us" className="links">
                ABOUT US
              </a>
              <a href="#contact-us" className="links">
                CONTACT US
              </a>
            </div>
          </nav>
          <div className="hero-section">
            <div className="hero-left">
              <div className="find-a-doctor">find a doctor & book online</div>
              <div className="lorem-ipsum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id augue vitae sapien aliquam ullamcorper efficitur ac
                nunc. Aliquam in justo.
              </div>
              <div className="btn">
                <div className="get-started">get started</div>
              </div>
            </div>
            <div className="hero-right">
              <img
                className="hero-right-image"
                src={heroImage}
                alt="heroImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
