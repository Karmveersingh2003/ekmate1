import React, { useState, useEffect } from 'react';
import './home.css';
import "../Navbar/navbar.css"
import admin from "./img/admins.jpg"
import student from "./img/students.jpg"
import faculty from "./img/faculty.jpg"
import bustrack from "./img/bustrack.webp"
import eventbased from "./img/eventbased.avif"
import adminpannel from "./img/adminpannel.webp"
import Jiet from "./img/jiet.jpeg"
import jietmp4 from "./img/jiet_mp4.mp4"



export default function Home() {

  return (
    <>

      {/* Header */}
      <header id="home">
        <div className="header-content">
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
          <div className="title">
            <h1 className="dark">Upcoming Events</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <article className="card col">
              <img className="card-img" src={student} alt="Everest camp trek" />
              <h4 className="dark">For Students</h4>
              <p className="font-color">
                Everest base camp trek is without a doubt, one of the most renowned travel destinations in the world.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
            <article className="card col">
              <img className="card-img" src={faculty} alt="Walking holidays" />
              <h4 className="dark">For Faculties</h4>
              <p className="font-color">
                Join small guided group walks, enjoy a challenging trek, or a luxury private guided walk which can be made especially for you.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
            <article className="card col">
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
        <div className="explore-content">
          <h1>EXPLORE THE EkMate</h1>
          <div className="line"></div>
          <p>
            “Effortless College Commutes: Your Bus Schedules at Your Fingertips!""  <br /> <br />
            “Track your bus, plan your commute, and never miss a ride with our
            real-time bus management system."<br /></p> <br />

          <a href="#" className="ctn">Download App</a>
        </div>
      </section>

      {/* Events Section */}
      <section className="events" id="events">
        <div className="container">
          <div className="title">
            <h1 className="dark">Key Features</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <article className="card col">
              <img  src={bustrack}  />
              <h4 className="dark">Real-time Bus Tracking</h4>
              <p className="font-color">
                “See where your bus is in real-time and get accurate arrival times.”
              </p>

            </article>
            <article className="card col">
              <img  src={eventbased} />
              <h4 className="dark">Daily and Event-based Schedules</h4>
              <p className="font-color">
                “Access daily schedules or find buses for special college events".
              </p>

            </article>
            <article className="card col">
              <img  src={adminpannel}  />
              <h4 className="dark">Admin Panel</h4>
              <p className="font-color">
                “Admins can effortlessly update schedules, ensuring everyone is up to date.”
              </p>

            </article>
          </div>
        </div>
      </section>
      {/* jiet vedio Section */}
      <section>
        <div className="title">
          <h1 className="dark">About the College</h1>
          <div className="line"></div>
        </div>
        <div id='about_college_main'>
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
      {/* jiet marketing Section */}
      <section>
        <div className="title">
          <h1 className="dark"> The College’s Environment</h1>
          <div className="line"></div>
        </div>

        <div id='jietmp4'>
          <video src={jietmp4} autoPlay loop muted />
        </div>

        {/* <div className="title">
          <h1 className="dark"> Campus Life & Facilities </h1>
          <div className="line"></div>
        </div> */}


      </section>

    </>
  );
}


