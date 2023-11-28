import { useState, useCallback, useEffect } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import "./ListOfProjects.css";
import { Link } from "react-router-dom";

const ListOfProjects = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFixedButtonClick = useCallback(() => {
    // Please sync "Create project" to the project
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFixedButtonContainer2Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);
  return (
    <>
      <div className="list-of-projects">
        <div className="navbar-icon">
        <input type="search" className="Search5"/>
        </div>
        <div className="background-icon"></div>
        <button className="fixed-button0" onClick={onFixedButtonClick}>
          <div className="AzText">A-Z</div>
        </button>
        <button className="state" onClick={onFixedButtonClick}>
          <div className="StateText">State</div>
        </button>       
          <Link to="/create-project">
  <button className="createProject" onClick={onFixedButtonClick}>
  <div className="AzText">Create project</div>
</button>
</Link>
        <a className="maxperformance1-1" data-animate-on-scroll />
        <img
          className="avatar-icon"
          alt=""
          src="/avatar.svg"
          onClick={openFrame}
        />
        <button className="SignButton" onClick={onFixedButtonContainer2Click}>
          <div className="Sign">Sign in</div>
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

export default ListOfProjects;

