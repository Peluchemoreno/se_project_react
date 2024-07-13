import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

export default function SideBar({signout, onChangeProfileClick}) {

  const currentUser = useContext(CurrentUserContext)

  function handleChangeProfileClick(){
    onChangeProfileClick('edit-profile')
  }

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
      <div className="sidebar__navigation">
        <button className="sidebar__button" onClick={handleChangeProfileClick}>Change profile data</button>
        <button className="sidebar__button" onClick={signout}>Log out</button>
      </div>
    </aside>
  );
}
