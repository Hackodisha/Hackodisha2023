import React from 'react';
import {Logo} from './Images/HackLogo.png';

export const AboutUs = () => {
  return (
    <div className='aboutus'>
        <div className='logo-container'>
            <img src={Logo} className='hacklogo' />
        </div>
        <div className='para-container'>
        HackOdisha- a thrilling 36-hour online hackathon organized by Webwiz, Nit Rourkela— an event dedicated to fostering community collaboration. With an impressive turnout of over 1600 participants across India, this hackathon promises to be a platform where innovation knows no bounds.

        Here, we witness groundbreaking projects spanning many fields, including healthcare, education, environment, women's security, and much more. Our participants bring their unique perspectives and expertise to address real-world challenges in these critical areas.

        We celebrate the power of technology and the indomitable spirit of our participants. Together, we're shaping a brighter future through innovation and collaboration.

        </div>
    </div>
  )
}
