import './Sidebar.css'
import profilePicture from '../../assets/profile-pic.png'

export default function Sidebar(){
  return (
    <aside className='sidebar'>
      <div className="sidebar__profile-element">
        <img src={profilePicture} alt="profile-picture" className="sidebar__profile-image" />
        <h3 className="sidebar__profile-name">Terrence Tegene</h3>
      </div>
    </aside>
  )
}