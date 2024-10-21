import React from 'react'
import "./contact.css"
import "../Home/home.css"

export default function Contactus() {
  return (
   <>
    <section id="contact">
            <div class="title">
                <h1 class="font-color">Contact Us</h1>
                <div class="line"></div>
            </div>
            <div class="contact_us">
                <forms class="cform" action="" method="post">
                    <div class="crow-message">
                        <h1 class="color">Send us a message</h1>
                        <div></div>
                    </div>
                    <div class="crow-in">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                        />
                    </div>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Your Email id"
                        />
                    <div class="crow">
                        <div class="ccol-left">
                            <select name="country" id="country" >
                             <option value="Select Role">Select Role</option>
                                <option value="India">Student</option>
                                <option value="Russia">Faculty</option>
                                <option value="usa">Admin</option>
                                <option value="Japan">Other</option>
                               
                               
                            </select>
                        </div>
                    </div>
                    <div class="crow">
                        <div class="ccol-left">
                            <textarea
                                type="text"
                                id="remarks"
                                name="remarks"
                                placeholder="Your Message/Query......"
                                // style="height: 150px"
                            ></textarea>
                        </div>
                    </div>
                    <input class="crow-s" type="submit" value="Send Query" />
                </forms>
                <div class="cbox">
                    <div>
                        <p class="cbox-message">
                            Prefer some other way ?<br />Reach us by using the
                            details given below
                        </p>
                        <div class="cbox-line"></div>
                    </div>
                    <div class="c_boxx">
                        <a href="mailto:abc@gmail.com"
                            ><i class="fa fa-envelope"></i>
                            Mail: EkMate@support.com
                        </a>
                    </div>
                    <div class="c_boxx">
                        <a href="tel:+91-12345-67890"
                            ><i class="fa fa-phone"></i>
                            Phone: (+91) 12345-67890
                        </a>
                    </div>
                    <div class="c_boxx">
                        <a href="#"
                            ><i class="fa fa-map-marker"></i>
                            Location: NH-62 Road,Jodhpur,India
                        </a>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}
