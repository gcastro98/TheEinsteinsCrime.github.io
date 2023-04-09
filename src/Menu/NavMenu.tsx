
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
    <nav className="nav-top-menu">
      <div className="nav-top-menu__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-top-menu__buttons">
        {buttons?.map((button) => (
          <li
            key={button.name}
            className={`nav-top-menu__button ${button.right ? 'right' : 'left'}`}
            onClick={button.onClick}
          >
            {button.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
