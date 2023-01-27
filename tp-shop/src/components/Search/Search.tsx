import "./Search.scss";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_FILTER } from "../../services/actions";

function Search() {
  const dispatch = useDispatch();
  function searchClick(e: ChangeEvent) {
    const val = e.target as HTMLInputElement;
    dispatch({
      type: SEARCH_FILTER,
      payload: val.value,
    });
  }

  return (
    <form className="search">
      <img className="search__icon" src="search-b.svg" alt="alt"></img>
      <input
        type="search"
        className="search__button"
        placeholder="Поиск..."
        onChange={searchClick}
      ></input>
    </form>
  );
}

export default Search;
