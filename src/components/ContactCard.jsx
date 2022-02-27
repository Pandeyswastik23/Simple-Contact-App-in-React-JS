
import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, firstName, lastName, contactNumber } = props.contact;
  return (
    <div className="item">
 <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        
              <div className="header">
                  {firstName} {lastName}
              
              </div>
        <div>{contactNumber}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;