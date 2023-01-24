import "./TableCard.scss";

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
interface ITableCard {
  card: ICard;
}

function TableCard({ card }: ITableCard) {
  return (
    <div className="TableCard">
      <img className="TableCard__image" alt="alt" src={card.image_url}></img>
      <p className="TableCard__name TableCard__align-start">{card.name}</p>
      <p className="TableCard__watch">{card.views}</p>
      <p className="TableCard__begin">{card.start_date}</p>
      <p className="TableCard__finish">{card.end_date}</p>
    </div>
  );
}

export default TableCard;
