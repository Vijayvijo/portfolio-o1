import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Vijayvijo?tab=repositories' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/vijay-j-fullstackdeveloper-/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/login/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/?lang=en' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
