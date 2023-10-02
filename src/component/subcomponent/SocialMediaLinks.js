import React, { Component } from 'react'

 const SocialMediaLinks = ({sociallinks}) => {
  



    return (
        <div className="social-links">
         { sociallinks.twitter ? (<a href={ sociallinks.twitter } className="twitter"><i className="bx bxl-twitter"></i></a>) : "" }
         {sociallinks.facebook ? (<a href={ sociallinks.facebook } className="facebook"><i className="bx bxl-facebook"></i></a>) : "" }
         {sociallinks.instagram ? (<a href={ sociallinks.instagram } className="instagram"><i className="bx bxl-instagram"></i></a>) : "" }
         {sociallinks.googleplus ? (<a href={ sociallinks.googleplus } className="google-plus"><i className="bx bxl-skype"></i></a>) : "" }
         {sociallinks.linkedin ? (<a href={ sociallinks.linkedin } className="linkedin"><i className="bx bxl-linkedin"></i></a>) : "" }
    </div>
    );
}

export default SocialMediaLinks;