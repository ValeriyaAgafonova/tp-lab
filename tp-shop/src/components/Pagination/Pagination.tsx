import PaginationButton from "../PaginationButton/PaginationButton"
import { useSelector } from "react-redux";
import { ICard } from "../../types";
import './Pagination.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_LIST } from "../../services/actions";
function Pagination(){
     const pagesNumber = useSelector((store: any) => store.data.pagesNumber);

const [isActivePage, setActivePage] = useState(1)
const dispatch = useDispatch();
function changePage(page: number, way: string){
console.log(page)
if (way === 'next' && page < pagesNumber){
setActivePage(isActivePage + 1)
dispatch({
    type: CHANGE_LIST, payload: (isActivePage + 1)
})
}
else if (way === 'prev' && page > 1){
    setActivePage(isActivePage - 1)
    dispatch({
        type: CHANGE_LIST, payload: (isActivePage - 1)
    })
}
}

return (
    <div className="Pagination">
        <div onClick={() => changePage(isActivePage, 'prev')}>
<PaginationButton type="prev" value="<"/>
</div>
{[...Array(pagesNumber)].map((item, index) =><div onClick={() => setActivePage(index+1)} key={index}><PaginationButton key={index} type='number' active={isActivePage === (index + 1)} value={(index + 1).toString()}/></div>  ) }
<div onClick={() => changePage(isActivePage, 'next')}>
<PaginationButton type="next" value=">" />
</div>
    </div>
)

}

export default Pagination