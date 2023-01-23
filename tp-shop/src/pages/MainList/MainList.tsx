
import Search from '../../components/Search/Search';
import Sorting from '../../components/Sorting/Sorting';
import Table from '../../components/Table/Table';
import './MainList.scss'

function MainList(){
return(
    <div className="mainList">
<h1 className='mainList__heading'>Карточки контента</h1>
<div className='mainList__filters'>
    <Sorting/>
    <Search/>
</div>
<Table/>
    </div>
)

}

export default MainList;