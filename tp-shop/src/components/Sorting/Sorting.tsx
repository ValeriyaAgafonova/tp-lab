import { useState } from "react";
import Tab from "../Tab/Tab";
import "./Sorting.scss";
import { useDispatch } from "react-redux";
import { SORT_ITEMS_BY_END_DATE, SORT_ITEMS_BY_NAME, SORT_ITEMS_BY_START_DATE, SORT_ITEMS_BY_VIEWS } from "../../services/actions";

function Sorting() {
const dispatch = useDispatch();
  const [active, setActive] = useState("name");
function sortData(value: string){
    setActive(value)
if (value === 'view'){
    dispatch({
        type: SORT_ITEMS_BY_VIEWS
})
}
else if (value === 'name'){
    dispatch({
        type: SORT_ITEMS_BY_NAME
})
}
else if (value === 'begin'){
    dispatch({
        type: SORT_ITEMS_BY_START_DATE
})
}
else if (value === 'finish'){
    dispatch({
        type: SORT_ITEMS_BY_END_DATE
})
}
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
