import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <a href="/">
        <p style={{ color: theme.tertiary }}>
          Designed & Built by Rohit Nawani
        </p>
      </a>
    </div>
  );
}

export default Footer;
