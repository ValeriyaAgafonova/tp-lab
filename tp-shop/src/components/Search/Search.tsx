import './Search.scss'

function Search(){
    return (
        <form className="search">
            <img className='search__icon' src='search-b.svg' alt='alt'></img>
            <input type='search' className="search__button" placeholder="Поиск..."></input>
        </form>
    )
}

export default Search