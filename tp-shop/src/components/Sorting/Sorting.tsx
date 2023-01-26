import "./Sorting.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Tab from "../Tab/Tab";
import {
  REVERSE_ITEMS,
  SORT_ITEMS_BY_END_DATE,
  SORT_ITEMS_BY_NAME,
  SORT_ITEMS_BY_START_DATE,
  SORT_ITEMS_BY_VIEWS,
} from "../../services/actions";

function Sorting() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("name");
  const [isUpICon, setUpIcon] = useState("to-top.png");

  function sortData(value: string) {
    if (active === value) {
      setUpIcon(isUpICon === "to-bottom.png" ? "to-top.png" : "to-bottom.png");
      return dispatch({
        type: REVERSE_ITEMS,
      });
    }
    setActive(value);
    setUpIcon("to-top.png");
    if (value === "view") {
      dispatch({
        type: SORT_ITEMS_BY_VIEWS,
      });
    } else if (value === "name") {
      dispatch({
        type: SORT_ITEMS_BY_NAME,
      });
    } else if (value === "begin") {
      dispatch({
        type: SORT_ITEMS_BY_START_DATE,
      });
    } else if (value === "finish") {
      dispatch({
        type: SORT_ITEMS_BY_END_DATE,
      });
    }
  }
  return (
    <div className="sorting">
      <p>Сортировать:</p>
      <div onClick={() => sortData("name")}>
        <Tab active={active === "name"} text={"по названию"} icon={isUpICon} />
      </div>
      <div onClick={() => sortData("view")}>
        <Tab
          active={active === "view"}
          text={"по просмотрам"}
          icon={isUpICon}
        />
      </div>
      <div onClick={() => sortData("begin")}>
        <Tab
          active={active === "begin"}
          text={"по дате начала"}
          icon={isUpICon}
        />
      </div>
      <div onClick={() => sortData("finish")}>
        <Tab
          active={active === "finish"}
          text={"по дате окончания"}
          icon={isUpICon}
        />
      </div>
    </div>
  );
}

export default Sorting;
