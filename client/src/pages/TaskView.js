import { useState, useCallback } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import "./TaskView.css";
import { Link } from "react-router-dom";

const CreateProject = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onProjectNameText1Click = useCallback(() => {
    // Please sync "List of Projects" to the project
  }, []);

  const onFixedButtonContainerClick = useCallback(() => {
    // Please sync "Task View" to the project
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFixedButtonContainer1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onFixedButtonContainer2Click = useCallback(() => {
    // Please sync "List of Projects" to the project
  }, []);

  return (
    <>
      <div className="create-project">
      <div className="navbar-icon">
        <input type="search" className="Search5"/>
        </div>
        <div className="background-icon"></div>
        <div className="rec" />
        <div className="social-media-post-cardyesno-parent">
          <div className="social-media-post-cardyesno">
            <div className="task-name" /> 
            <img
              className="social-media-post-cardyesno-child"
              alt=""
              src="/vector-12.svg"
            />
            <div className="footer">
              <div className="share-button">
                <img
                  className="share-android-icon"
                  alt=""
                  src="/vector-12.svg"
                />
                <div className="label">Share</div>
              </div>
            </div>
          </div>
          <img
          className="avatar-icon"
          alt=""
          src="/avatar.svg"
          onClick={openFrame}
        />
          <img
          className="avatarTask"
          alt=""
          src="/avatarUsername.svg"
          onClick={openFrame}
        />
        <div className="Username">Username</div>
        <input type="time"  className="TimeTask"  placeholder="Time"/>
          <div className="project-name">Name Example</div>
          <div className="header-info" >
            <div className="project-name1" onClick={onProjectNameText1Click}>
            </div>
          </div>
          <button className="mustHave" onClick={onFixedButtonContainerClick}>
          <div className="mustHaveText">Must have</div>
          </button>
          <div  className="description1">Description</div>
          <Link to="/list-of-tasks">
          <button className="cansel" onClick={onFixedButtonContainerClick}>
          <div className="canselText">Cansel</div>
          </button>
          </Link>
        </div>
        <Link to="/login">
        <button className="SignButton" onClick={onFixedButtonContainer1Click}>
          <div className="Sign">Sign in</div>
        </button>
        </Link>
        <img
          className="maxperformance1-2-icon"
          alt=""
          src="/maxperformance1-2@2x.png"
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreateProject;
