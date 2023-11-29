import "./Frame.css";

const Frame = () => {
  return (
    <div className="profile-picture-parent">
      <img className="profile-picture-icon" alt="" src="/profile-picture.svg" />
      <img className="name-icon" alt="" src="/name.svg" />
      <div className="role">Role:</div>
      <div className="email">Email:</div>
      <img className="frame-child" alt="" src="/vector-15.svg" />
      <img className="frame-item" alt="" src="/vector-15.svg" />
      <img className="icons" alt="" src="/icons.svg" />
    </div>
  );
};

export default Frame;
