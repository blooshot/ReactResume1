import React from 'react'
import "../styles/Heading.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css'
import 'boxicons/css/boxicons.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'

import Nav from './Nav.js'

const Headnav = () => {
    
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <header id="header" className="d-flex flex-column justify-content-center">
            <Nav /> 
            </header>
        </>
    )
}

export default Headnav;