import './main.css'
import logo from './images/rocket-img.png'
import section1Image from './images/img.png'
import wave1 from './images/wave-1.png'
import zbclogo from './images/zbc-logo.png'
import robot from './images/robot.png'

function Home() {
  return (
    <>
    <section className="section1">
      <nav className="navBar">
        <img src={logo} alt="Logo" className="logo"/>
        <li className="navButton">Home</li>
        <li className="navButton">About Us</li>
        <li className="navButton">Our Work</li>
        <li className="navButton">Our Events</li>
        <li className="navButton">Contact Us</li>
      </nav>
      <section className="section1Content">
      <div className="headers">
        <h1 className="zbc">Zero Bugs Club</h1>
        <h2 className="spaceDivision">Space Division</h2>
        <h3 className="toInfinity">To Infinity and Beyond !</h3>
        <div className="blueButton">Get Started</div>
      </div>
      <img src={section1Image} alt="Image" className="section1Image" />
      </section>
      <img src={wave1} alt="Wave 1" className="homeWave" />
    </section>

    <section className="section2">
      <section className="about1">
        <img src={zbclogo} alt="Logo" className="zbclogo" />
        <div className="about1Content">
        <h1 className="aboutRight">About ZBC</h1>
        <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quos perspiciatis consequatur at optio ipsum iusto quae cum id, laborum assumenda illo voluptas sint maiores blanditiis! Praesentium magnam rem qui.</p>
        </div>
      </section>
      <section className="about2">
        <div className="about2Content">
        <h1 className="aboutLeft">About Space Division</h1>
        <p className="aboutText2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quos perspiciatis consequatur at optio ipsum iusto quae cum id, laborum assumenda illo voluptas sint maiores blanditiis! Praesentium magnam rem qui.</p>
        </div>
        <img src={robot} alt="Robot" className="robot" />
      </section>
    </section>
    </>
  )
}

export default Home
