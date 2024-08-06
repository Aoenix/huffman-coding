import React from "react";
import "./Footer.css";

import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePersonalVideo } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">Designed by Gunjan Jarawat</div>
      <div className="icons">
        <a href="mailto:gunjanjarawat20030@gmail.com">
          <AiOutlineMail className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
