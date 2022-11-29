import React from 'react';
import search from '../../assets/icons/magnifying-glass-solid.svg';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, language, loading, params, setParams }) {
  const Options = document.querySelector('.TodoFilterContainer');
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);

    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  React.useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params, setSearchValue]);

  

  const openOptions = () => {
    Options.classList.toggle('show');
}

  return (
    <div className="SearchContainer">
      <div className="TodoSearch ">
        <img src={search} alt="search"/>
        <input
          className='Search'
          onChange={onSearchValueChange}
          value={searchValue}
          disabled={loading}
        
          placeholder={language === 'spanish' ? 'Buscar' : 'Search'} 
        />
      </div>
      <div className="Settings">
          <div onClick={openOptions} className="SettingsButton"></div>
        </div>
    </div>
  )
}

export { TodoSearch };