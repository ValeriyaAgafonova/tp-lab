import Search from "../../components/Search/Search";
import Sorting from "../../components/Sorting/Sorting";
import Table from "../../components/Table/Table";
import "./MainList.scss";
import { useEffect, useState } from "react";
import TableCard from "../../components/TableCard/TableCard";
import { getItems } from "../../services/actions";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";

interface ICard {
  image_url: string;
  logo_url: string;
  name: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
  discount: string;
  stars: number;
  old_price: string;
  new_price: string;
  disclaimer?: string;
}

interface IData {
  isLoading: boolean;
  hasError: boolean;
  data: ICard[];
}
function MainList() {
  const dispatch = useDispatch();
  const itemsList: ICard[] = useSelector((store: any) => store.ingredients.itemsList);

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
      <Table />
{
        itemsList.map((card) => <TableCard card={card} key={card.name} />)}
    </div>
  );
}

export default MainList;
