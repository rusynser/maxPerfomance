import { useState, useCallback, useEffect } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import "./ListOfProjects.css";
import { Link } from "react-router-dom";

const ListOfProjects = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:3000/projects');
      const projectsData = await response.json();
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

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
        <img className="maxperformance1-2-icon" alt="" src="/maxperformance1-2@2x.png"></img>
        <div className="navbar-icon">
          <input type="search" className="Search5" />
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
        <Link to="/login">
          <button
            className="SignButton"
            onClick={onFixedButtonContainer2Click}
          >
            <div className="Sign">Sign in</div>
          </button>
        </Link>
      </div>
      <div className="ProjectBack">
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project._id}>
              <Link to={`/projects/${project._id}/tasks`}>{project.projectName}</Link>  
              <li key="description">{project.projectDescription}</li>         
            </li>
          ))}
        </ul>
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
