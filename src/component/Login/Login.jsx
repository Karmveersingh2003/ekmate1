import React, { useState } from 'react';
import "./login.css";

export default function Login() {
  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <div className={`containers ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-containers">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
       
            <h2 className="titles">Sign in</h2>
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="College Email" />
            </div>
            <input type="submit" value="Login" className="button solid" />

           
           
          </form>

          <form action="" className="sign-up-forms">
            <h2 className="titles">Sign up</h2>
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>

            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="numbe" placeholder="Registration Number" />
            </div>

            <div className="input-fields">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="College Mail" />
            </div>

            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Branch" />
            </div>

            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="number" placeholder="Year" />
            </div>

            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="number" placeholder="Phone Number" />
            </div>


            <input type="submit" value="Sign up" className="button solid" />

           
            
          </form>
        </div>
      </div>

      <div className="panels-containers">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos corporis repellendus.</p>
            <button className="button transparent" onClick={handleSignUpClick} id="sign-up-button">Sign up</button>
          </div>
          <img src="img/undraw_education_f8ru.svg" className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos corporis repellendus.</p>
            <button className="button transparent" onClick={handleSignInClick} id="sign-in-button">Sign in</button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
