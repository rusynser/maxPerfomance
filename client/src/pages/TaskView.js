// CreateTask.js
import React, { useState, useCallback } from 'react';
import PortalPopup from '../components/PortalPopup';
import Frame from '../components/Frame';
import './CreateTask.css';
import { Link } from 'react-router-dom';

const TaskView = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFixedButtonContainer1Click = useCallback(() => {
    // Handle "Login" functionality
  }, []);

  const onFixedButtonContainer2Click = useCallback(() => {
    // Handle "List of Projects" functionality
  }, []);

  return (
    <>
      <div className="create-task">
        {/* Your task creation UI elements go here */}
        <Link to="/list-of-tasks">
          <button className="cancel" onClick={onFixedButtonContainer2Click}>
            <div className="cancelText">Cancel</div>
          </button>
        </Link>
        <button className="createNewTask" onClick={onFixedButtonContainer2Click}>
          <div className="createTaskText">Create Task</div>
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

export default TaskView;
