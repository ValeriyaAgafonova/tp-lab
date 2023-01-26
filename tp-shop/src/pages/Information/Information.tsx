import "./Information.scss";
import { useLocation, useHistory } from "react-router-dom";
import { stateType } from "../../types";

function Information() {
  const { state } = useLocation<stateType>();
  const history = useHistory();
  function formatDate(date: Date) {
    let dd = date.getDate();
    const fd = dd < 10 ? "0" + dd : `${dd}`;

    let mm = date.getMonth() + 1;
    const md = mm < 10 ? "0" + mm : `${mm}`;

    let yy = date.getFullYear();
    return fd + "." + md + "." + yy;
  }

  const data = state.data;
  const stars = +data.stars;
  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);

  let oldPr = data.old_price.toString().split(/\.|\,|\//);
  if (+oldPr[1] < 10) {
    oldPr[1] = `${oldPr[1]}0`;
  }
  let newPr;
  if (data.new_price) {
    newPr = data.new_price.toString().split(/\.|\,|\//);
    if (+newPr[1] < 10) {
      newPr[1] = `${newPr[1]}0`;
    }
  }

  return (
    <div className="information">
      <p className="information__back" onClick={() => history.goBack()}>
        &#60; Назад
      </p>
      <div className="information__card">
        <div className="information__header">
          {data.discount !== "0" && +data.discount !== 0 && (
            <div className="information__discount">
              <img
                className="information__background"
                src="arrow.png"
                alt=""
              ></img>
              <p className="information__discount">-{data.discount}% </p>
            </div>
          )}
          <img
            className="information__logo"
            alt="logo"
            src={data.logo_url}
          ></img>
        </div>
        <div className="information__main">
          <img
            className="information__image"
            alt="alt"
            src={data.image_url}
          ></img>
          <div className="information__right">
            <h2 className="information__name">{data.name}</h2>
            <div className="information__rate">
              {[...Array(stars)].map((item, index) => (
                <img src="full-star.png" alt="" key={index} />
              ))}
              {[...Array(5 - stars)].map((item, index) => (
                <img src="empty-star.png" alt="" key={index} />
              ))}
            </div>

            {newPr ? (
              <div className="information__prices">
                <div className="information__old-price">
                  <div className="information__old-price__price">
                    <p className="information__data__old-price">{oldPr[0]}</p>
                    <span>{oldPr[1]}</span>
                    <p className="information__data__old-price">&#8381;</p>
                  </div>
                  <p className="information__text__old-price">старая цена</p>
                </div>
                <div className="information__new-price">
                  <div className="information__new-price__price">
                    <p className="information__data__new-price">{newPr[0]}</p>
                    <span>{newPr[1]}</span>
                    <p className="information__data__new-price">&#8381;</p>
                  </div>
                  <p className="information__text__new-price">цена по акции</p>
                </div>
              </div>
            ) : (
              <div className="information__only-price">
                {" "}
                <p className="information__text__new-price">цена:</p>
                <p className="information__data__new-price">{oldPr[0]}</p>
                <span className="information__span">{oldPr[1]}</span>
                <p className="information__data__new-price">&#8381;</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="information__footer">
        <p className="information__duration">
          Акция действует с {formatDate(startDate)} по {formatDate(endDate)}
        </p>
      </div>
    </div>
  );
}

export default Information;
