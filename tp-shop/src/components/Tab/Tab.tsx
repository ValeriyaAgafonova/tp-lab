import { useState } from "react";
import "./Tab.scss";

interface ITab {
  active: boolean;
  text: string;
  icon: string
}

function Tab({ active, text, icon }: ITab) {

   
  return (
    <div className="sorting__tab">
      <p
        className={` ${active === true ? "sorting__active" : "sorting__sort"}`}
      >
        {text}
      </p>
      {active &&
      <img className="sorting__icon__active" alt="" src={icon}></img>
}
    </div>
  );
}

export default Tab;
