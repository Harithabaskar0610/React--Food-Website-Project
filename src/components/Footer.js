import React from "react";
/*import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";*/
import {} from "react-icons";
import "../styles/Footer.css";
import { BsFacebook, } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import {FaLinkedinIn} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";



function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsFacebook size={55}/> <GrInstagram size={55}/> <FaLinkedinIn size={55}/> <BsTwitter size={55}/>
      </div>
      <p> &copy; 2023 harithapizza.com</p>
    </div>
  );
}

export default Footer;