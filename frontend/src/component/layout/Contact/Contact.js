import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mohamed-teber@outlook.fr">
        <Button>Contact: mohamed-teber@outlook.fr</Button>
      </a>
    </div>
  );
};

export default Contact;
