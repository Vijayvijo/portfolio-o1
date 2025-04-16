import React from 'react';
import './About.css';
import Image from '../../assets/avatar-1.jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hey there! I'm Vijay J, an enthusiastic and motivated web development fresher with a keen eye for creating interactive and responsive web applications.

I’m at the beginning of my web development journey and loving every step of it. My focus right now is on sharpening my skills through hands-on projects and deepening my understanding of modern web technologies.
                        </p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className="about__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Boostrap</li>
                            <li>JavaScript</li>
                            <li>React Js</li>
                            <li>Node.js</li>
                            <li>Postgres SQL</li>
                            <li>MySql</li>
                            <li>Python</li>
                            <li>Django</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About