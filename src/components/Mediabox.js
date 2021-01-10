import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram
  
} from "@fortawesome/free-brands-svg-icons";
function Mediabox() {
  return (
    <div class="social-container">
      <div class = "icon">
      <a href="https://www.linkedin.com/in/victor-zheng-a4462a164/" target="_blank" rel="noopener noreferrer"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size = "4x" />
</a>
</div>
<div class = "icon">
<a href="https://github.com/SmilestheSad" target="_blank" rel="noopener noreferrer" className="github social">
  <FontAwesomeIcon icon={faGithub} size="4x" />
</a>
</div>
<div class = "icon">
<a href="https://www.instagram.com/victorzheng231/" rel="noopener noreferrer" target="_blank"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="4x" />
</a>
</div>
<div class = "icon">
<a href="https://www.facebook.com/victor.zheng.50" rel="noopener noreferrer" target="_blank"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="4x" />
</a>
</div>
    </div>
  );
}


export default Mediabox;