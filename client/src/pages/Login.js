import { useCallback } from "react";
import "./Login.css";

const Login = () => {
  const onImage2Click = useCallback(() => {
    // Please sync "List of Projects" to the project
  }, []);

  const onRegisterTextClick = useCallback(() => {
    // Please sync "Registration " to the project
  }, []);

  return (
    <div className="login">
      <img
        className="image-2-icon"
        src="/MaxPerformance1.png"
      />
      <img className="login-child" alt="" src="/rectangle-14.svg" />
      <div className="login-inner">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="group-parent">
            <div className="sign-in-parent">
              <div className="sign-in">{`Sign in  `}</div>
              <div className="lorem-ipsum-is">{`Lorem Ipsum is simply `}</div>
            </div>
            <div className="welcome">Welcome !</div>
            <div className="component-parent">
              <div className="email-parent">
                <div className="email">Email</div>
                <div className="rectangle-group">
                  <div className="instance-child" />
                  <div className="enter-your-user">Enter your email</div>
                </div>
              </div>
              <div className="instance-parent">
                <div className="email-parent">
                  <div className="PasswordText">Password</div>
                  <div className="Password">
                    <div className="instance-child" />
                    <input className="PasswordInput" placeholder="Enter your password"/>
                  </div>
                </div>
                <img
                  className="eye"
                  alt=""
                  src="/show.png"
                />
              </div>
              <div className="checkbox-parent">
                <div className="checkbox">
                  <div className="checkbox-base" />
                </div>
                <div className="remember-me">Remember me</div>
                <div className="forgot-password">Forgot Password ?</div>
              </div>
              <div className="group-div">
                <div className="LoginButton" />
                <div className="login1">Login</div>
              </div>
            </div>
            <div className="dont-have-an-container">
              <span className="dont-have-an">Don’t have an Account ?</span>
              <span className="span">{` `}</span>
            </div>
            <div className="register" onClick={onRegisterTextClick}>
              <span className="dont-have-an">Register</span>
              <span className="span1">{` `}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="google-button">
        <img className="google-logo-icon" alt="" src="/google.png" />
        <div className="sign-in-with">Sign in with Google</div>
      </div>
    </div>
  );
};

export default Login;
