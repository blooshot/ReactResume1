import React, { Component } from 'react'
import { useDataContext } from '../../Provider/DataProvider';

 const SocialMediaLinks = () => {
  
    let data = useDataContext();


    return (
        <div className="social-links">
         { data.socialLinks.twitter ? (<a href={ data.socialLinks.twitter } className="twitter"><i className="bx bxl-twitter"></i></a>) : "" }
         {data.socialLinks.facebook ? (<a href={ data.socialLinks.facebook } className="facebook"><i className="bx bxl-facebook"></i></a>) : "" }
         {data.socialLinks.instagram ? (<a href={ data.socialLinks.instagram } className="instagram"><i className="bx bxl-instagram"></i></a>) : "" }
         {data.socialLinks.googleplus ? (<a href={ data.socialLinks.googleplus } className="google-plus"><i className="bx bxl-skype"></i></a>) : "" }
         {data.socialLinks.linkedin ? (<a href={ data.socialLinks.linkedin } className="linkedin"><i className="bx bxl-linkedin"></i></a>) : "" }
    </div>
    );
}

export default SocialMediaLinks;