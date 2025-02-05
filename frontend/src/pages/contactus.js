import React from 'react';
import '../styles/contact-us.css'
import patreon from '../images/Patreon-Logo.png';

function ContactUs() {
  return (
    <div className="wrapper">
      <div className='contact-container'>
        <div className='takepart'>
            <h1>How to take part?</h1>
            <p className='takepart-text'>
            To join one of our classes, please visit our portal area to register. We have a subscription covering monthly and yearly options that allow access to all our online activities, plus an option to donate per class. The donations are important to ensure we can deliver and sustain online classes in the future.
            If you would like to know more about the session or need help registering, please:
            </p>
            <span className='takepart-patreon'>
                <a href="https://patreon.com/HealingMagenYoga?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target='blank'>
                    <img src={ patreon } alt='patreon' width={100}></img>
                </a>
            </span>
            <p className='takepart-email'>
            healingmagenyoga@gmail.com
            </p>
            
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
