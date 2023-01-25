import './PaginationButton.scss'
import { useDispatch } from "react-redux";
import { CHANGE_LIST } from '../../services/actions';


interface IButtons {
    type: string;
    number?: number;
    key?: number;
    value: string;
    active?: boolean;
    onClick?: (e: MouseEvent) => void;
}

function PaginationButton({type, number, value, active}: IButtons){
const dispatch = useDispatch();
function paginateFunc(){
    if (type === 'number'){
        dispatch({
            type: CHANGE_LIST, payload: value
    })
    }
}
    return (
        <button className={`Pagination__button Pagination__${type} ${active === true ? "Pagination__active" : ""}`} onClick={paginateFunc}>
    {value}
        </button>
    )
    
    }
    
    export default PaginationButton