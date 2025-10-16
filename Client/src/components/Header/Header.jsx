import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import SearchBar from "../SearchBar/SearchBar";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) setModalOpened(true);
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* Left: Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/xivha-logo.png" alt="XivhaWorld Logo" />
          </Link>
        </div>

        {/* Center: Search */}
        <div className="header-search">
          <SearchBar />
        </div>

        {/* Right: Menu/Profile */}
        <div className="header-right">
          <button className="add-property" onClick={handleAddPropertyClick}>
            Add Property
          </button>
          <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

          {!isAuthenticated ? (
            <button className="login-btn" onClick={loginWithRedirect}>
              Login
            </button>
          ) : (
            <ProfileMenu user={user} logout={logout} />
          )}

          {/* Mobile menu icon */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={28} />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpened && (
        <div className="mobile-menu">
          <Link to="/properties">Properties</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
