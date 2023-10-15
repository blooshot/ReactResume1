import React, { Component } from 'react'
import { useDataContext } from '../../Provider/DataProvider';

 const SocialMediaLinks = () => {
  
    let data = useDataContext();


    return (
        <div className="social-links">
         { data.social.twitter ? (<a href={ data.social.twitter } className="twitter"><i className="bx bxl-twitter"></i></a>) : "" }
         {data.social.facebook ? (<a href={ data.social.facebook } className="facebook"><i className="bx bxl-facebook"></i></a>) : "" }
         {data.social.instagram ? (<a href={ data.social.instagram } className="instagram"><i className="bx bxl-instagram"></i></a>) : "" }
         {data.social.googleplus ? (<a href={ data.social.googleplus } className="google-plus"><i className="bx bxl-skype"></i></a>) : "" }
         {data.social.linkedin ? (<a href={ data.social.linkedin } className="linkedin"><i className="bx bxl-linkedin"></i></a>) : "" }
    </div>
    );
}

export default SocialMediaLinks;