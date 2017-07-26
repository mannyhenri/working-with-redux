import React from 'react';

const Header = (props) => {
  return (
    <div className="navbar-fixed">
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <div className="brand-logo center">{props.name}'s Notepad</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
