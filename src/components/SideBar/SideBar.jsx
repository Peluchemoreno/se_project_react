import "./SideBar.css";
import profilePicture from "../../assets/profile-pic.png";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile-element">
        <img
          src={profilePicture}
          alt="profile-picture"
          className="sidebar__profile-image"
        />
        <h3 className="sidebar__profile-name">Justin McDonald</h3>
      </div>
    </aside>
  );
}
