import "./MainList.scss";
import Search from "../../components/Search/Search";
import Sorting from "../../components/Sorting/Sorting";
import Table from "../../components/Table/Table";
import { useEffect } from "react";
import TableCard from "../../components/TableCard/TableCard";
import { getItems } from "../../services/actions";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { ICard } from "../../types";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

function MainList() {
  const dispatch = useDispatch();
  const itemsList: ICard[] = useSelector((store: any) => store.data.itemsList);
  const pageStart = useSelector((store: any) => store.data.pageNumberStart);
  const pageEnd = useSelector((store: any) => store.data.pageNumberEnd);

  useEffect(() => {
    dispatch(getItems() as unknown as AnyAction);
  }, []);

  return (
    <div className="mainList">
      <p className="mainList__heading">Карточки контента</p>
      <div className="mainList__filters">
        <Sorting />
        <Search />
      </div>
      <Pagination />
      <Table />
      {!itemsList.length && <p className="mainList__nothing">Нет товаров</p>}
      {itemsList.slice(pageStart, pageEnd).map((card) => (
        <Link
          className="mainList__link"
          key={card.name}
          to={{
            pathname: `/information/${card.name}`,
            state: {
              data: card,
            },
          }}
        >
          <TableCard card={card} key={card.name} />
        </Link>
      ))}
    </div>
  );
}

export default MainList;
