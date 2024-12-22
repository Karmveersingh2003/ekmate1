import React, { useState, useEffect } from 'react';
import './about.css';
import earth from "./img/earth.gif"
import web from "./img/web.gif"
import react from "./img/react.png"
import css from "./img/css.png"
import js from "./img/js.png"
import mongodb from "./img/Mongodb.png"
import express from "./img/express.png"
import node from "./img/node.png"
import git from "./img/git.png"
import busgif from "./img/bus-gif.gif"
const AboutEKmate = ({ theme }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    const paragraph = `EKmate is designed to simplify and enhance the commuting experience for students and faculty at JIET College.
     Our mission is to provide real-time bus tracking, easy access to schedules, and a seamless journey around campus.`;

    useEffect(() => {
        if (index < paragraph.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + paragraph[index]);
                setIndex(index + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, paragraph]);

    return (
        <>

            <section>
            <div id='about-text-gif'>
                <div className="About_Welcome">
                    <h3>Welcome to Ekmate</h3>
                    <h1>We are a creative group
                        of people who design
                        influential brands and
                        digital experiences.</h1>
                </div>
                <div id='about-busgif'><img src={busgif} alt="" /></div>
                </div>
                <button className='more-about-us-btn'> More About us </button>
            </section>
            <section>
                <div className={`about-container`}>
                    <h3 className="about-subtitle">HELLO THERE ,</h3>
                    <h1 className="about-title">We Are EKmate</h1>
                    <div className="line"></div>
                    <p className="about-paragraph">{displayedText}</p>
                </div>
            </section>

            <div className="what-we-do-container">
                <h3 className="what-we-do-subtitle">WHAT WE DO ,</h3>
                <h1 className="what-we-do-title">We’ve got everything you need to launch and grow your business</h1>
                <div className="what-we-do-line"></div>

                <div id='main-div-gif-content'>
                    <div id='gif-logo'>
                        <img src={earth} alt="" />
                    </div>
                    <div id='what-we-do-paragraph'>
                        <h1>Web Design</h1>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                    </div>
                    <div id='gif-logo'>
                        <img src={web} alt="" />
                    </div>
                    <div id='what-we-do-paragraph'>
                        <h1>Web Design</h1>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                    </div>
                </div>

                <div id='main-div-gif-content'>
                    <div id='gif-logo'>
                        <img src={earth} alt="" />
                    </div>
                    <div id='what-we-do-paragraph'>
                        <h1>Web Design</h1>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                    </div>
                    <div id='gif-logo'>
                        <img src={web} alt="" />
                    </div>
                    <div id='what-we-do-paragraph'>
                        <h1>Web Design</h1>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                    </div>
                </div>
                <div id='main-div-gif-content'>
                    <div id='gif-logo'>
                        <img src={earth} alt="" />
                    </div>
                    <div id='what-we-do-paragraph'>
                        <h1>Web Design</h1>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                    </div>
                    <div id='gif-logo'>
                        <img src={web} alt="" />
                    </div>
                    <div id='what-we-do-paragraph'>
                        <h1>Web Design</h1>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                    </div>
                </div>
               
            </div>

            {/* slider */}
            <div id='main-tool-div'> </div>
            <div className="what-we-do-container">
                <h3 className="what-we-do-subtitle">WHAT WE USE ,</h3>
                <h1 className="what-we-do-title">We’ve Used Technologies , Database And Framework's Like</h1>
                <div className="what-we-do-line"></div>
            <div class="tool-slider">
                <div class="tool-slide-track">
                    <div class="tool-slide">
                        <img src={react} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={css} height="100" width="200" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={js} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={mongodb} height="100" width="200" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={node} height="100" width="200" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={git} height="120" width="230" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={react} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={mongodb} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={css} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={js} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={node} height="100" width="250" alt="" />
                    </div>
                    <div class="tool-slide">
                        <img src={express} height="100" width="250" alt="" />
                    </div>
                   
                </div>
            </div>
</div>

        </>
    );
};

export default AboutEKmate;
