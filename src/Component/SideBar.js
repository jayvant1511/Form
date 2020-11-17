import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
// import * as AiIcons from 'react-icons/ai';
import './Sidebar.css';
function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => { setSidebar(!sidebar) }
  return (
    <>

      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          {/* <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineCloseCircle/>
              </Link>
            </li> */}
          {SidebarData.map((items, index) => {
            return (
              <li key={index} className={items.cName}>
                <Link to={items.path} onPress={() => alert('something')}>
                  {items.icon}
                  <span>{items.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default SideBar;