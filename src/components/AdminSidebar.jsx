import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/adminSidebar.css'
const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpen(!mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {/* Menu Button */}
      {isMobile && (
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>WBIZNEX Admin</h2>
        </div>
        <nav>
          <Link to="/admin/create">➕ {!isMobile && 'Add Blog'}</Link>
          <Link to="/admin/settings">⚙️ {!isMobile && 'Settings'}</Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
