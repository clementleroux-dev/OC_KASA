import React from "react";
import "./Collapse.scss";
import { useState } from "react";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse__item">
      <div className="collapse__item__header" onClick={toggle}>
        <h2>{title}</h2>
        <span>
          {open ? (
            <i className="fa-solid fa-chevron-up fa-2xs " />
          ) : (
            <i className="fa-solid fa-chevron-down fa-2xs " />
          )}
        </span>
      </div>

      <div className={open ? "collapse-content__show" : "collapse-content"}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
