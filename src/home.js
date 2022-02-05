import './main.css'
import logo from './images/rocket-img.png'
import section1Image from './images/img.png'
import wave1 from './images/wave-1.png'
import zbclogo from './images/zbc-logo.png'
import robot from './images/robot.png'
import hexa1 from './images/Polygon 1.png'
import hexa2 from './images/Polygon 2.png'
import hexa3 from './images/Polygon 3.png'
import hexa4 from './images/Polygon 4.png'
import hexa5 from './images/Polygon 5.png'
import hexa6 from './images/Polygon 6.png'
import orbiter1 from './images/img-1.png'
import orbiter2 from './images/img-2.png'
import orbiter3 from './images/img-3.png'
import sliderLeft from './images/sliderButton1.png'
import sliderRight from './images/sliderButton2.png'
import sI1 from './images/slider-img-1.png'
import sI2 from './images/slider-img-2.png'
import sI3 from './images/slider-img-3.png'
import sI4 from './images/slider-img-4.png'
import sI5 from './images/slider-img-5.png'
import sI6 from './images/slider-img-6.png'


function Home() {
  return (
    <>
    <section className="section1">
    <img src={logo} alt="Logo" className="logo"/>
      <nav className="navBar">
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
    <section className="section3">
      <img src={logo} alt="Logo" className="logo"/>
      <h1 className="work">Our Work</h1>
      <hr className="separator" />
      <p className="workText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dignissimos et provident fuga aperiam autem libero error suscipit unde totam. Maiores, voluptatem ratione! Deleniti corrupti hic nam odio placeat cupiditate.</p>
      <h1 className="moonLaunch">Moon Launch</h1>
      <div className="moonLaunchImages">
        <div className="topImage">
        <img src={hexa1} alt="HexaImage" className="moonLaunchHexaImage1" />
        </div>
        <div className="middleImages">
          <img src={hexa2} alt="HexaImage" className="moonLaunchHexaImage2" />
          <img src={hexa3} alt="HexaImage" className="moonLaunchHexaImage3" />
          </div>
        <div className="bottomImages">
        <img src={hexa4} alt="HexaImage" className="moonLaunchHexaImage4" />
        <img src={hexa5} alt="HexaImage" className="moonLaunchHexaImage5" />
        <img src={hexa6} alt="HexaImage" className="moonLaunchHexaImage6" />
        </div>
      </div>
      <h1 className="ourOrbiters">Our Orbiters</h1>
      <div className="orbiterImages">
        <img src={orbiter1} alt="Orbiters" className="orbiterImage" />
        <img src={orbiter2} alt="Orbiters" className="orbiterImage" />
        <img src={orbiter3} alt="Orbiters" className="orbiterImage" />
      </div>
      <h1 className="otherProjects">Other Projects</h1>
      <div className="slider">
        <img src={sliderLeft} alt="Slider Button" className="sliderButtonL" />
        <div className="carousel">
          <img src={sI1} alt="" className="sliderImage" />
          <img src={sI2} alt="Slider Image" className="sliderImage" />
          <img src={sI3} alt="Slider Image" className="sliderImage" />
          <img src={sI4} alt="Slider Image" className="sliderImage" />
          <img src={sI5} alt="Slider Image" className="sliderImage" />
          <img src={sI6} alt="Slider Image" className="sliderImage" />
        </div>
        <img src={sliderRight} alt="Slider Button" className="sliderButtonR" />
      </div>
    </section>
    </>
  )
}

export default Home
