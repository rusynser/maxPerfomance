import { useCallback } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="registration">
      <div className="registration-inner">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="group-parent">
            <div className="registration-wrapper">
              Sign in
            </div>
            <div className="instance-parent">
              <div className="email-parent">
                <div className="Email">Email</div>
                <div className="rectangle-group">
                 
                  <input className="enterEmail" placeholder="Enter your email" />
                </div>
              </div>
              <div className="instance-group">
                <div className="password-parent">
                  <div className="Password">Password</div>
                    <input type="password" className="enterPassword" placeholder="Enter password" />
                   <input type="checkbox" className="RememberMe"/><div className="RememberText">RememberMe</div>
                </div>
                <img
                  className="eyeIcon"
                  alt=""
                  src="/show.png"
                />
              </div>
              <div className="rectangle-parent2">
                <div className="group-item" />
                <button className="register"><p className="registerText">Register</p></button>

              </div>
              
            </div>
          </div>
        </div>
      </div>
      <img
        className="maxperformance1-3-icon"
        alt=""
        src="/maxperformance1-2@2x.png"
      />
     
    
    </div>
  );
};

export default Registration;
