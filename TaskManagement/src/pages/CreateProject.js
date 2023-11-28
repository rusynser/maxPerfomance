import { useState, useCallback } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import "./CreateProject.css";
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
          <input  className="description"  placeholder="Description"/>
          <img
          className="avatar-icon"
          alt=""
          src="/avatar.svg"
          onClick={openFrame}
        />
          <input  className="project-name"  placeholder="Project name"/>
          <div className="header-info" >
            <div className="project-name1" onClick={onProjectNameText1Click}>
            </div>
          </div>
          <Link to="/">
          <button className="cansel" onClick={onFixedButtonContainerClick}>
          <div className="canselText">Cansel</div>
          </button>
          </Link>
        </div>
        <button className="SignButton" onClick={onFixedButtonContainer1Click}>
          <div className="Sign">Sign in</div>
        </button>
        <img
          className="maxperformance1-2-icon"
          alt=""
          src="/maxperformance1-2@2x.png"
        />
        <button className="createNewProject" onClick={onFixedButtonContainer2Click}>
          <div className="createProjectText">Create Project</div>
        </button>
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
