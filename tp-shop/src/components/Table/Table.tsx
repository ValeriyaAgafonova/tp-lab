import "./Table.scss";
function Table() {
  return (
    <div className="table">
      <div className="table__headings">
        <p>Фото</p>
        <p className="table__align-start">Название</p>
        <p className="table__headings-mobile">Просмотры</p>
        <p className="table__headings-mobile">Начало ротации</p>
        <p className="table__headings-mobile">Конец ротации</p>
      </div>
    </div>
  );
}

export default Table;
