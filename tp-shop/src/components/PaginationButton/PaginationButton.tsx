import "./PaginationButton.scss";
import { IButtons } from "../../types";

function PaginationButton({ type, value, active }: IButtons) {

  return (
    <button
      className={`Pagination__button Pagination__${type} ${
        active === true ? "Pagination__active" : ""
      }`}
    >
      {value}
    </button>
  );
}

export default PaginationButton;
