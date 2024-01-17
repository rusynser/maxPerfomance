import { useCallback } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
                 
                  <input className="enterEmailLogin" placeholder="Enter your email" />
                </div>
              </div>
              <div className="instance-group">
                <div className="password-parent">
                  <div className="PasswordLogin">Password</div>
                    <input type="password" className="enterPasswordLogin" placeholder="Enter password" />
                   <input type="checkbox" className="RememberMe"/><div className="RememberText">RememberMe</div>
                </div>
                <img
                  className="eyeIconLogin"
                  alt=""
                  src="/show.png"
                />
              </div>
              <div className="rectangle-parent2">
                <div className="group-item" />
                <Link to="/">
                <button className="SignLogin"><p className="SignText">Sign In</p></button>
                </Link>
                <span className="Account">You don't have an account yet?</span>
                <Link to="/registration">
              <button className="LinkReg"> Registration</button>
              </Link>
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

export default Login;
