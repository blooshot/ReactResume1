import React from 'react'
import { ReactDOM } from 'react';
import Typed from 'typed.js';
import SocialMediaLinks from './subcomponent/SocialMediaLinks';
import "../styles/Hero.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css'
import 'boxicons/css/boxicons.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'

export const Hero = ({herodata, socialLinks}) => {

    console.log(herodata)

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: herodata,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      });



    return (
        <section id="hero" className="d-flex flex-column justify-content-center" style={{ backgroundImage: "url(/img/hero-bg.jpg)" }}>
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Brandon Johnson</h1>
                <p>I'm <span className="typed" ref={el}></span></p>
                <SocialMediaLinks sociallinks={socialLinks} />
            </div>
        </section>
    )
}

export default Hero;