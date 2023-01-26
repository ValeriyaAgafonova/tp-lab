import "./TableCard.scss";
import { ITableCard } from "../../types";

function TableCard({ card }: ITableCard) {
  return (
    <div className="TableCard">
      <img className="TableCard__image" alt="alt" src={card.image_url}></img>
      <div className="TableCard__description TableCard__align-start">
        <p className="TableCard__name ">{card.name}</p>
        <p className="TableCard__category">{card.category}</p>
      </div>
      <p className="TableCard__watch">{card.views}</p>
      <p className="TableCard__begin">{card.start_date}</p>
      <p className="TableCard__finish">{card.end_date}</p>
    </div>
  );
}

export default TableCard;
