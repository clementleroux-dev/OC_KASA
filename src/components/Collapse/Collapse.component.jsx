import "./Collapse.scss";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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
            <BiChevronUp className="chevron" />
          ) : (
            <BiChevronDown className="chevron" />
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
