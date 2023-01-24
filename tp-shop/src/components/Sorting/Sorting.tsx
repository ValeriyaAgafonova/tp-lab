import { useState } from "react";
import Tab from "../Tab/Tab";
import "./Sorting.scss";
function Sorting() {
  const [active, setActive] = useState("name");
function sortData(value: string){
    setActive(value)
}
  return (
    <div className="sorting">
      <p>Сортировать:</p>
      <div onClick={() => sortData("name")}>
        <Tab active={active === "name"} text={"по названию"} />
      </div>
      <div onClick={() => sortData("view")}>
        <Tab active={active === "view"} text={"по просмотрам"} />
      </div>
      <div onClick={() => sortData("begin")}>
        <Tab active={active === "begin"} text={"по дате начала"} />
      </div>
      <div onClick={() => sortData("finish")}>
        <Tab active={active === "finish"} text={"по дате окончания"} />
      </div>
    </div>
  );
}

export default Sorting;
