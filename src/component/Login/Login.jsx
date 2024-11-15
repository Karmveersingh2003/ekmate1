import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { ColorRing } from 'react-loader-spinner';
import './login.css';

export default function Login() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [isOtpLoginMode, setIsOtpLoginMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSignUpClick = () => {
    setSignUpMode(true);
    setIsOtpLoginMode(false); // Ensure not in OTP login mode when signing up
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
    setIsOtpLoginMode(false); // Regular sign-in
  };

  const handleOtpLoginClick = () => {
    setIsOtpLoginMode(true); // Switch to OTP login mode
    setSignUpMode(false); // Ensure sign-up mode is off when logging in via OTP
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  function OtpLogin({ onLogin }) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return isValidEmail;
    };

    const handleEmailVerification = () => {
      if (validateEmail(email)) {
        setLoading(true);
        setTimeout(() => {
          setIsEmailVerified(true);
          setLoading(false);
          setError('');
        }, 2000);
      } else {
        setError('Invalid Email');
      }
    };

    const handleOTPVerification = () => {
      const enteredOTP = otp.join('');
      if (/^\d{6}$/.test(enteredOTP)) {
        const username = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
        onLogin(username);
      } else {
        setError('Incorrect OTP');
      }
    };

    return (
      <div className='otp-div'>
        {!isEmailVerified ? (
          <>
            
            <div className="input-fields">
                      <i className="fas fa-lock"></i>
                      <input type="Text" placeholder="College Email"  value={email}
              onChange={(e) => setEmail(e.target.value)} />
                    </div>
            {error && <span className='otp-error'>{error}</span>}
            <div id='verify_login'>
              <button onClick={handleEmailVerification} className='otp-verify-email solid'>
                {loading ? <ColorRing color="#fff" height={50} width={50} /> : 'Verify Otp'}
              </button>
              <input onClick={handleEmailVerification} type="submit" value="Login" className="button solid" />
            </div>
          </>
        ) : (
          <>
            <h1 className='otp-heading'>Enter Your OTP:</h1>
            <div className='otp-input-container'>
              <OTPInput
                value={otp.join('')}
                onChange={(value) => setOtp(value.split(''))}
                numInputs={6}
                isInputNum
                inputStyle={{
                  width: '3rem',
                  height: '3rem',
                  margin: '0 0.2rem',
                  fontSize: '1.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ced4da',
                }}
                renderInput={(inputProps, index) => <input {...inputProps} key={index} />}
              />
            </div>
            {error && <span className='otp-error'>{error}</span>}
            <div>
              <button onClick={handleOTPVerification} className='otp-login'>
                Loginn
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`containers ${signUpMode ? "sign-up-mode" : ""}`}>
      {isLoggedIn ? (
        <>
        
          <form className="sign-in-form">
                  
                  
                    <div className='otp-div'>
          <h1 className='otp-heading'>Welcome, {username}</h1>
          <button onClick={handleLogout} className='otp-login'>
            Logout
          </button>
          </div>
                   
                    
                  </form>
</>
        
      ) : (
        <>
        
          <div className="forms-containers">
            <div className="signin-signup">
              {!isOtpLoginMode ? (
                <>
                  <form className="sign-in-form">
                    <h2 className="titles">Sign in</h2>
                    {/* <div className="input-fields">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="" />
                    </div> */}
                    <div className="input-fields">
                      <i className="fas fa-lock"></i>
                      <input type="" placeholder="College Email/Phone Number" />
                    </div>
                    <input onClick={handleOtpLoginClick} type="submit" value="Login" className="button solid" />
                    
                  </form>

                  <form className="sign-up-forms">
                    <h2 className="titles">Sign up</h2>
                    <div className="input-fields">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="input-fields">
                      <i className="fas fa-lock"></i>
                      <input type="" placeholder="Registration Number" />
                    </div>
                    <div className="input-fields">
                      <i className="fas fa-envelope"></i>
                      <input type="email" placeholder="College Mail" />
                    </div>
                    <div className="input-fields">
                      <i className="fas fa-lock"></i>
                      <input type="" placeholder="Branch" />
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
                </>
              ) : (
                <OtpLogin onLogin={handleLogin} />
              )}
            </div>
          </div>

          <div className="panels-containers">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos corporis repellendus.</p>
                <button className="button transparent" onClick={handleSignUpClick} id="sign-up-button">
                  Sign up
                </button>
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
        </>
      )}
    </div>
  );
}
