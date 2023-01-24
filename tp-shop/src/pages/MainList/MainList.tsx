
import Search from '../../components/Search/Search';
import Sorting from '../../components/Sorting/Sorting';
import Table from '../../components/Table/Table';
import './MainList.scss';
import { useEffect, useState } from 'react';
import TableCard from '../../components/TableCard/TableCard';


interface ICard {
    "image_url": string,
	"logo_url":  string,
	"name":  string,
	"category": string,
	"views": number,
	"start_date": string,
	"end_date": string,
	"discount": string,
	"stars": number,
	"old_price": string,
	"new_price": string,
	"disclaimer"?: string,
}

interface IData {
    isLoading: boolean,
    hasError: boolean,
    data: ICard[],
}
function MainList(){


  const [state, setState] = useState<IData>({
    isLoading: false,
    hasError: false,
    data: [],
  });
  useEffect(() => {
    getIngredients();
  }, []);

  const checkResponse = (response: any) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка ${response.status}`);
    }
  };

  const getIngredients = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch('products.json')
      .then(checkResponse)
      .then(function (data) {
        setState({ ...state, data: JSON.parse(JSON.stringify(data)), isLoading: false });
        console.log(data)
      })
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
        console.log(e)
      });
  };

  const { data, isLoading, hasError } = state;
return(
    <div className="mainList">
<p className='mainList__heading'>Карточки контента</p>
<div className='mainList__filters'>
    <Sorting/>
    <Search/>
</div>
<Table/>
{!isLoading && !hasError && data.length && (
    data.map(card =>
         <TableCard card={card} key={card.name}/>
         )
)}
    </div>
)

}

export default MainList;