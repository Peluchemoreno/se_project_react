import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

export default function SideBar() {

  const currentUser = useContext(CurrentUserContext)

  return (
    <aside className="sidebar">
      <div className="sidebar__profile-element">
      {!currentUser.avatar ? <div className="header__profile_image-default">{currentUser.name}</div> : <img
              src={currentUser.avatar}
              alt="profile picture"
              className="sidebar__profile-image"
            />}
        <h3 className="sidebar__profile-name">{currentUser.name}</h3>
      </div>
    </aside>
  );
}
