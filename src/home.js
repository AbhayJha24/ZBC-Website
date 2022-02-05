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
import eI1 from './images/events-img-1.png'
import eI2 from './images/events-img-2.png'
import eI3 from './images/events-img-3.png'
import eI4 from './images/events-img-4.png'
import social5 from './images/social (1).png'
import social4 from './images/social (2).png'
import social3 from './images/social (3).png'
import social2 from './images/social (4).png'
import social1 from './images/social (5).png'
import footerImage from './images/footer-img.png'


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
    <section className="section4">
    <img src={logo} alt="Logo" className="logo2"/>
    <h1 className="event">Our Events</h1>
    <hr className="separator2" />
    <div className="eventsCards">
    <div className="card">
      <img src={eI1} alt="Events Image" className="eventImage" />
      <div className="whiteButton">View More</div>
    </div>
    <div className="card">
      <img src={eI2} alt="Events Image" className="eventImage" />
      <div className="whiteButton">View More</div>
    </div>
    <div className="card">
      <img src={eI3} alt="Events Image" className="eventImage" />
      <div className="whiteButton">View More</div>
    </div>
    <div className="card">
      <img src={eI4} alt="Events Image" className="eventImage" />
      <div className="whiteButton">View More</div>
    </div>
    </div>
    <h1 className="contact">Get in Touch</h1>
    <div className="formMapSection">
      <form className="form">
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="text" name="email"placeholder="Enter your email address" />
        <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
        <input type="button" value="Launch" className="blueButton"/>
      </form>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.78021807046!2d80.06892727299397!3d13.047822266689678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1644030249166!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
    </section>
    <section className="footer">
    <img src={footerImage} alt="Rocket" className="footerImage"/>
      <h1 className="footerHeading">To Infinity and Beyond !</h1>
      <div className="footerRightText">
        <h2 className="mailus">Mail Us</h2>
        <h3 className="mail">ZBC@space.com</h3>
        <div className="socialIcons">
          <img src={social1} alt="Social Icon" className="socialIcon" />
          <img src={social2} alt="Social Icon" className="socialIcon" />
          <img src={social3} alt="Social Icon" className="socialIcon" />
          <img src={social4} alt="Social Icon" className="socialIcon" />
          <img src={social5} alt="Social Icon" className="socialIcon" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
