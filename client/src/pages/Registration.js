import { useCallback } from "react";
import "./Registration.css";
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
              Registration
            </div>
            <div className="instance-parent">
              <div className="user-name-parent">
                <div className="user-name">User name</div>
                <div className="rectangle-group">
                  <div className="instanceUser" />
                  <input className="enterUser" placeholder="Enter your user name" />
                </div>
              </div>
              <div className="email-parent">
                <div className="Email">Email</div>
                <div className="rectangle-group">
                  <div className="instance-child" />
                  <input className="enterEmail" placeholder="Enter your email" />
                </div>
              </div>
              <div className="instance-group">
                <div className="password-parent">
                  <div className="Password">Password</div>
                  <div className="rectangle-group">
                    <div className="instance-child" />
                    <input type="password" className="enterPassword" placeholder="Enter password" />
                  </div>
                </div>
                <img
                  className="eyeIcon"
                  alt=""
                  src="/show.png"
                />
              </div>
              <div className="groupConfirm">
                <div className="password-parent">
                  <div className="confirmPassword">Confirm password</div>
                  <div className="rectangle-group">
                    <div className="instance-child" />
                    <input type="password" className="enterConfirm" placeholder="Confirm password" />
                  </div>
                </div>
                <img
                  className="eyeConfirmReg"
                  alt=""
                  src="/show.png"
                />
              </div>
              <div className="rectangle-parent2">
                <div className="group-item" />
                <Link to="/login">
                <button className="register"><p className="registerText">Register</p></button>
                </Link>
              </div>
            </div>
            <div
              className="already-have-an-container"
              onClick={onAlreadyHaveAnClick}
            >
              <span className="already-have-an">Already have an Account ?</span>
              <Link to="/login">
              <button className="sign-in"> Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-Select">
      <select className="SelectRole">
        <option>Freelancer</option>
        <option>Customer</option>
      </select>
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
