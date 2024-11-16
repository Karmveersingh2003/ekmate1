import React, {useState, useEffect } from 'react';
import './home.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import "../Navbar/navbar.css";
import admin from "./img/admins.jpg";
import student from "./img/students.jpg";
import faculty from "./img/faculty.jpg";
import bustrack from "./img/bustrack.webp";
import eventbased from "./img/eventbased.avif";
import adminpannel from "./img/adminpannel.webp";
import Jiet from "./img/jiet.jpeg";
import jietmp4 from "./img/jiet_mp4.mp4";

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  
  // FAQs
  // FAQ Accordion State
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle Active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <header id="home">
        <div className="header-content" data-aos="fade-down">
          <h2 id="quote">Welcome To EkMate </h2>
          <div className="line"></div>
          <h1>Your One-Stop Solution For Campus Transportation Management </h1>
          <a
            href="#about"
            className="ctn"
            onClick={() => {
              document.querySelector('#quad').style.border = '2px solid whitesmoke';
              document.querySelector('#quad').style.borderRadius = '20px';
            }}
          >
            Learn more
          </a>
        </div>
      </header>

      {/* Events Section */}
      <section className="events" id="events">
        <div className="container">
          <div className="title" data-aos="fade-up">
            <h1 className="dark">Upcoming Events</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <article className="card col" data-aos="zoom-in">
              <img className="card-img" src={student} alt="Everest camp trek" />
              <h4 className="dark">For Students</h4>
              <p className="font-color">
                Everest base camp trek is without a doubt, one of the most renowned travel destinations in the world.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
            <article className="card col" data-aos="zoom-in" data-aos-delay="200">
              <img className="card-img" src={faculty} alt="Walking holidays" />
              <h4 className="dark">For Faculties</h4>
              <p className="font-color">
                Join small guided group walks, enjoy a challenging trek, or a luxury private guided walk which can be made especially for you.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
            <article className="card col" data-aos="zoom-in" data-aos-delay="400">
              <img className="card-img" src={admin} alt="Andaman Beaches" />
              <h4 className="dark">For Admins</h4>
              <p className="font-color">
                Diving in Andaman Beaches is exceptional. The coastal belt surroundings are one of the richest coral reef ecosystems in the world.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore" id="explore">
        <div className="explore-content" data-aos="fade-up">
          <h1>EXPLORE THE EkMate</h1>
          <div className="line"></div>
          <p>
            “Effortless College Commutes: Your Bus Schedules at Your Fingertips!” <br /> <br />
            “Track your bus, plan your commute, and never miss a ride with our real-time bus management system." <br />
          </p>
          <br />
          <a href="#" className="ctn">Download App</a>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="events" id="events">
        <div className="container">
          <div className="title" data-aos="fade-up">
            <h1 className="dark">Key Features</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <article className="card col" data-aos="flip-left">
              <img src={bustrack} alt="Real-time Bus Tracking" />
              <h4 className="dark">Real-time Bus Tracking</h4>
              <p className="font-color">
                “See where your bus is in real-time and get accurate arrival times.”
              </p>
            </article>
            <article className="card col" data-aos="flip-left" data-aos-delay="200">
              <img src={eventbased} alt="Daily and Event-based Schedules" />
              <h4 className="dark">Daily and Event-based Schedules</h4>
              <p className="font-color">
                “Access daily schedules or find buses for special college events.”
              </p>
            </article>
            <article className="card col" data-aos="flip-left" data-aos-delay="400">
              <img src={adminpannel} alt="Admin Panel" />
              <h4 className="dark">Admin Panel</h4>
              <p className="font-color">
                “Admins can effortlessly update schedules, ensuring everyone is up to date.”
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About the College */}
      <section>
        <div className="title"  data-aos="fade-up">
          <h1 className="dark">About the College</h1>
          <div className="line"></div>
        </div>
        <div id='about_college_main' data-aos="fade-right">
          <div id='about_college_img'>
            <img src={Jiet} alt="" srcset="" />
          </div>
          <div id='about_college_paragraph'>
            <p>JIET, established in 2003, is one of the leading groups in the field of education and health care located in western Rajasthan.
              It caters to stakeholders (students and patients) from all over the nation. The institution derives its strength from core values
              and a visionary team of experts focusing on Quality education, implementation, and learning processes.
              This is a technologically driven and professionally run multi-disciplinary organization with mentoring by leaders from all over the world.
              JIET primarily specializes in the fields of Engineering, MBBS, Design, Management, Bachelor of Computer Applications (BCA)
              , Master of Computer Applications(MCA), Hotel Management, Nursing, and Pharmacy. JIET Hospital and Cancer Research Center in the
              healthcare industry is a prominent name in research and multispecialty in the healthcare domain.</p>
          </div>
        </div>

      </section>
   

      {/* Video Section */}
      <section>
        <div className="title" data-aos="fade-up">
          <h1 className="dark">The College’s Environment</h1>
          <div className="line"></div>
        </div>
        <div id="jietmp4" data-aos="zoom-in">
          <video src={jietmp4} autoPlay loop muted />
        </div>
      </section>

       {/* FAQs Section */}
       <section id="faq_main_body">
       <div className="title"  data-aos="fade-down">
          <h1 className="dark">FAQs</h1>
          <div className="line"></div>
        </div>
        <div className="wrapper-faq" data-aos="fade-up">
          {[
            { question: 'How do I verify my email?', answer: 'Click the link in the verification email from verify@codepen.io...' },
            { question: 'How do I reset my password?', answer: 'Click "Forgot Password" on the login page and follow the instructions.' },
            { question: 'How do I Check Bus Routes?', answer: 'Click "Forgot Password" on the login page and follow the instructions.' },
            // Add more FAQs as needed
          ].map((faq, index) => (
            <div className="container-faq" key={index}>
              <div
                className={`question-faq ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>
              <div
                className="answercont-faq"
                style={{
                  maxHeight: activeIndex === index ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div className="answer-faq">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
}
