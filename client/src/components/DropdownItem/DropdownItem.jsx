import React from "react";
import "./DropdownItem.css"

const DropdownContent = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick = 
    {onClick}>
      {children}
    </div>
  );
};

export default DropdownItem;
