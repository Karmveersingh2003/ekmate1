import React, { useState, useEffect } from 'react';
import "./contact.css";
import "../Home/home.css";
import { FiMail } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";



export default function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Select Role');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (response) {
      alert("Your message has been sent successfully!");
    }
  }, [response]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = { name, email, role, message };

    try {
      const res = await fetch('YOUR_BACKEND_API_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse(null);
    }
  };

  return (
    <>
      <section id="contact">
        <div className="title">
          <h1 className="font-color">Contact Us</h1>
          <div className="line"></div>
        </div>
        <div className="contact_us">
            <div id='send_us_message_form'>
          <form className="cform" onSubmit={handleSubmit}>
            <div className="crow-message">
              <h1 className="color">Send us a message</h1>
              <div></div>
            </div>
            
            <div className="crow-in">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="crow">
              <div className="ccol-left">
                <select
                  name="country"
                  id="country"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Select Role">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Admin">Admin</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="crow">
              <div className="ccol-left">
                <textarea
                  id="remarks"
                  name="remarks"
                  placeholder="Your Message/Query......"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <input className="crow-s" type="submit" value="Send Query" />
          </form>
          </div>
          <div className="cbox">
            <p className="cbox-message">
              Prefer some other way? <br />
              Reach us by using the details given below
            </p>
            <div className="cbox-line"></div>
            <div className="c_boxx">
              <a href="mailto:abc@gmail.com">
                <i className="fa fa-envelope"><FiMail/></i> Mail: ekmate@support.com
              </a>
            </div>
            <div className="c_boxx">
              <a href="tel:+91-12345-67890">
                <i className="fa fa-phone"><IoIosPhonePortrait/></i> Phone: (+91) 12345-67890
              </a>
            </div>
            <div className="c_boxx">
              <a href="#">
                <i className="fa fa-map-marker"><FaMapLocationDot/></i> Location: NH-62 Road, Jodhpur, India
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
