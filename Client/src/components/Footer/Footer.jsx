import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand Section */}
          <div className="footer-brand">
            <img
              src="/xivha-logo.png"
              alt="XivhaWorld Logo"
              className="footer-logo"
            />
            <p className="footer-description">
              <strong>XivhaWorld</strong> — Empowering Ghanaians to find
              beautiful homes and spaces with ease. Discover comfort, community,
              and quality living — the <span>XivhaWorld</span> way.
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/properties">Residencies</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <MapPin size={18} className="icon" /> Accra, Ghana
            </p>
            <p>
              <Phone size={18} className="icon" /> +233 24 540 2719
            </p>
            <p>
              <Mail size={18} className="icon" /> support@xivhaworld.com
            </p>
            <div className="footer-socials">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Instagram className="social-icon" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <strong>XivhaWorld</strong> — Built
            with ❤️ in Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
