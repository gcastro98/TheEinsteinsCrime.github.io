
import React from 'react';
import './NavMenu.css';

type ButtonProps = {
  name: string;
  onClick: () => void;
  right?: boolean;
};

type NavTopMenuProps = {
  logo: string;
  buttons?: ButtonProps[];
};

const NavMenu: React.FC<NavTopMenuProps> = ({ logo, buttons }) => {
  return (
    <nav className="navMenu">
      <div className="navMenuSectionLogo">
        <img src={logo} alt="The Einstein's Crime" className="navMenuLogo"/>
      </div>
      {/* <div className="navMenuUlButtons"> */}
      <ul className="navMenuSectionButtons">
        {buttons?.map((button) => (
          <li
            key={button.name}
            className={`navMenuButton ${button.right ? 'right' : 'left'}`}
            onClick={button.onClick}
          >
            {button.name}
          </li>
        ))}
      </ul>
      {/* </div> */}
    </nav>
  );
};

export default NavMenu;
