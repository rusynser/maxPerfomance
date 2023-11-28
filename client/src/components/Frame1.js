import { useCallback } from "react";
import "./Frame1.css";

const Frame1 = () => {
  const onFixedButtonContainerClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="profile-picture-root">
      <img
        className="profile-picture-icon2"
        alt=""
        src="/profile-picture2.svg"
      />
      <img
        className="profile-picture-icon3"
        alt=""
        src="/profile-picture2.svg"
      />
      <img
        className="profile-picture-icon4"
        alt=""
        src="/profile-picture3.svg"
      />
      <img
        className="profile-picture-icon5"
        alt=""
        src="/profile-picture3.svg"
      />
      <img
        className="profile-picture-icon6"
        alt=""
        src="/profile-picture3.svg"
      />
      <img
        className="profile-picture-icon7"
        alt=""
        src="/profile-picture3.svg"
      />
      <img className="icons1" alt="" src="/icons1.svg" />
      <div className="fixed-button3" onClick={onFixedButtonContainerClick}>
        <div className="label4">ge</div>
      </div>
      <div className="message1">Message</div>
      <img className="icon-send-plane" alt="" src="/icon--send-plane.svg" />
      <div className="fixed-button4">
        <div className="create-task">{`Lorem `}</div>
      </div>
      <div className="fixed-button5">
        <div className="create-task1">Ipsum</div>
      </div>
      <div className="fixed-button6">
        <div className="create-task1">Ipsum</div>
      </div>
      <div className="fixed-button7">
        <div className="create-task">Lorem</div>
      </div>
      <div className="fixed-button8">
        <div className="create-task4">Lorem Ipsum</div>
      </div>
      <div className="fixed-button9">
        <div className="create-task">Lorem</div>
      </div>
    </div>
  );
};

export default Frame1;
