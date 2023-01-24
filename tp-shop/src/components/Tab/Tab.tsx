import "./Tab.scss";

interface ITab {
  active: boolean;
  text: string;
}

function Tab({ active, text }: ITab) {
  return (
    <div>
      <p
        className={` ${active === true ? "sorting__active" : "sorting__sort"}`}
      >
        {text}
      </p>
    </div>
  );
}

export default Tab;
