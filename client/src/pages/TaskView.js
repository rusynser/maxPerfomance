import { useState, useCallback } from "react";
import Frame1 from "../components/Frame1";
import PortalPopup from "../components/PortalPopup";
import Frame from "../components/Frame";
import "./TaskView.css";

const TaskView = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const onFixedButtonContainer2Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onProjectNameTextClick = useCallback(() => {
    // Please sync "List of Projects" to the project
  }, []);

  return (
    <>
      <div className="task-view">
        <div className="rec" />
        <div className="social-media-post-cardyesno-parent">
          <div className="social-media-post-cardyesno">
            <div className="task-name" />
            <div className="priority">
              <span>Priority</span>
              <span className="span">{`                  `}</span>
            </div>
            <div className="content">
              <div className="message">
                <p className="this-is-a-social-media-post">
                  <span>
                    <span>{`This is a social media post  💡✨  I’m thrilled to share this newly updated wireframe kit with you all! 👩🏻‍💻 `}</span>
                  </span>
                </p>
                <p className="uxdesign-figmacommunity">
                  <span>
                    <span className="uxdesign">#UXDesign</span>
                    <span> #FigmaCommunity</span>
                  </span>
                </p>
              </div>
            </div>
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
          <div className="time">
            <span>Time</span>
            <span className="span1">
              <span>{`           `}</span>
              <span className="span2">{`          `}</span>
            </span>
          </div>
          <div className="arrow-down">
            <img className="oval-icon" alt="" src="/oval.svg" />
            <img className="oval-icon" alt="" src="/oval1.svg" />
            <img className="oval-icon" alt="" src="/oval2.svg" />
          </div>
          <div className="arrow-down1">
            <img className="oval-icon" alt="" src="/oval.svg" />
            <img className="oval-icon" alt="" src="/oval1.svg" />
            <img className="oval-icon" alt="" src="/oval2.svg" />
          </div>
          <div className="arrow-down2">
            <img className="oval-icon" alt="" src="/oval.svg" />
            <img className="oval-icon" alt="" src="/oval1.svg" />
            <img className="oval-icon" alt="" src="/oval2.svg" />
          </div>
          <div className="arrow-down11">
            <img className="oval-icon" alt="" src="/oval.svg" />
            <img className="oval-icon" alt="" src="/oval1.svg" />
            <img className="oval-icon" alt="" src="/oval2.svg" />
          </div>
          <div className="description">
            <span>Description</span>
            <span className="span1">
              <span>{`           `}</span>
              <span className="span2">{`          `}</span>
            </span>
          </div>
          <img className="frame-child" alt="" src="/vector-12.svg" />
          <img className="frame-item" alt="" src="/vector-13.svg" />
          <img className="frame-inner" alt="" src="/vector-14.svg" />
          <img className="vector-icon" alt="" src="/vector-16.svg" />
          <img className="frame-child1" alt="" src="/vector-15.svg" />
          <div className="fixed-button">
            <div className="label1">State</div>
          </div>
          <div className="fixed-button1">
            <div className="label2">Priority</div>
          </div>
          <img
            className="profile-picture-icon"
            alt=""
            src="/profile-picture.svg"
          />
          <img className="name-icon" alt="" src="/name.svg" />
          <div className="task-name1">
            <span>Task name</span>
            <span className="span2">{`                  `}</span>
          </div>
          <div className="tags">
            <span>Tags</span>
            <span className="span2">{`                  `}</span>
          </div>
          <img className="iconhamburger" alt="" src="/vector-12.svg" />
          <div className="header-info" />
        </div>
        <img
          className="iconchat-alt"
          alt=""
          src="/iconchatalt.svg"
          onClick={openFrame}
        />
        <div className="comments">
          <span>Comments</span>
          <span className="span2">{`                  `}</span>
        </div>
        <div className="horizontal-nav-bar-desktop-web">
          <div className="stylestandar">
            <div className="white-space" />
            <div className="search-bar">
              <div className="search" />
              <img className="icon" alt="" src="/icon.svg" />
              <div className="input-text">Label</div>
            </div>
            <div className="actions">
              <img
                className="avatar-icon"
                alt=""
                src="/avatar.svg"
                onClick={openFrame1}
              />
            </div>
          </div>
        </div>
        <div className="fixed-button2" onClick={onFixedButtonContainer2Click}>
          <div className="label3">Sign in</div>
        </div>
        <img
          className="maxperformance1-2-icon"
          alt=""
          src="/maxperformance1-2@2x.png"
        />
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <div className="project-name" onClick={onProjectNameTextClick}>
          Project name
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame1 onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Frame onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default TaskView;
