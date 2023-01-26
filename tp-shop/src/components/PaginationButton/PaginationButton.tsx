import "./PaginationButton.scss";
import { useDispatch } from "react-redux";
import { CHANGE_LIST } from "../../services/actions";
import { IButtons } from "../../types";

function PaginationButton({ type, value, active }: IButtons) {
  const dispatch = useDispatch();
  function paginateFunc() {
    if (type === "number") {
      dispatch({
        type: CHANGE_LIST,
        payload: value,
      });
    }
  }
  return (
    <button
      className={`Pagination__button Pagination__${type} ${
        active === true ? "Pagination__active" : ""
      }`}
      onClick={paginateFunc}
    >
      {value}
    </button>
  );
}

export default PaginationButton;
