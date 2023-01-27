import "./Pagination.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_LIST } from "../../services/actions";
import PaginationButton from "../PaginationButton/PaginationButton";

function Pagination() {
  const dispatch = useDispatch();
  const pagesNumber: number = useSelector((store: any) => store.data.pagesNumber);
  const pageActiveNumber: number = useSelector((store: any) => store.data.pageActiveNumber);
//   const [isActivePage, setActivePage] = useState(1);

  function changePage(page: number, way: string) {
  console.log(page, way)
    if (way === "next" && page < pagesNumber) {
        console.log('next')
        // setActivePage(isActivePage + 1);
      dispatch({
        type: CHANGE_LIST,
        payload: +1,
      });
    } else if (way === "prev" && page > 1) {
        // setActivePage(isActivePage - 1);
      dispatch({
        type: CHANGE_LIST,
        payload: -1,
      });
    }
    else if (way === 'number') {
        dispatch({
                    type: CHANGE_LIST,
                    payload: -(pageActiveNumber - page),
                  });
    }
  }

  return (
    <div className="Pagination">
      <div onClick={() => changePage(pageActiveNumber, "prev")}>
        <PaginationButton type="prev" value="<" />
      </div>
      {[...Array(pagesNumber)].map((item, index) => (
        <div onClick={() => changePage(index + 1, 'number')} key={index}>
          <PaginationButton
            key={index}
            type="number"
            active={pageActiveNumber === index + 1}
            value={(index + 1).toString()}
          />
        </div>
      ))}
      <div onClick={() => changePage(pageActiveNumber, "next")}>
        <PaginationButton type="next" value=">" />
      </div>
    </div>
  );
}

export default Pagination;
