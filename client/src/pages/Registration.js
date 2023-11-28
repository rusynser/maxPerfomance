import { useCallback } from "react";
import "./Registration.css";

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
              <div className="registration1">{`Registration  `}</div>
            </div>
            <div className="instance-parent">
              <div className="user-name-parent">
                <div className="user-name">User name</div>
                <div className="rectangle-group">
                  <div className="instance-child" />
                  <div className="enter-your-user">Enter your user name</div>
                </div>
              </div>
              <div className="email-parent">
                <div className="user-name">Email</div>
                <div className="rectangle-group">
                  <div className="instance-child" />
                  <div className="enter-your-user">Enter your email</div>
                </div>
              </div>
              <div className="instance-group">
                <div className="password-parent">
                  <div className="user-name">Password</div>
                  <div className="rectangle-group">
                    <div className="instance-child" />
                    <div className="enter-your-user">Enter your Password</div>
                  </div>
                </div>
                <img
                  className="invisible-1-icon"
                  alt=""
                  src="/invisible-1.svg"
                />
              </div>
              <div className="instance-container">
                <div className="password-parent">
                  <div className="user-name">Confirm Password</div>
                  <div className="rectangle-group">
                    <div className="instance-child" />
                    <div className="enter-your-user">Confirm your Password</div>
                  </div>
                </div>
                <img
                  className="invisible-1-icon1"
                  alt=""
                  src="/invisible-11.svg"
                />
              </div>
              <div className="rectangle-parent2">
                <div className="group-item" />
                <div className="register">Register</div>
              </div>
            </div>
            <div
              className="already-have-an-container"
              onClick={onAlreadyHaveAnClick}
            >
              <span className="already-have-an">Already have an Account ?</span>
              <span className="sign-in"> Sign in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="registration-child" />
      <div className="registration-item" />
      <img
        className="maxperformance1-3-icon"
        alt=""
        src="/maxperformance1-3@2x.png"
      />
      <div className="settings">
        <img className="icon" alt="" src="/icon.svg" />
        <div className="role">Role</div>
        <img className="icons" alt="" src="/icons.svg" />
        <img className="icons1" alt="" src="/icons1.svg" />
      </div>
      <div className="team-sub-menu-wrapper">
        <div className="team-sub-menu" />
      </div>
      <div className="engineering">
        <div className="customer">Customer</div>
      </div>
      <div className="analytics">
        <div className="freelancer">Freelancer</div>
      </div>
      <img className="divider-icon" alt="" src="/divider.svg" />
    </div>
  );
};

export default Registration;
