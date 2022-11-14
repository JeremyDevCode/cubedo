import React from 'react';
import search from '../assets/icons/magnifying-glass-solid.svg';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, language, loading}) {
  const Options = document.querySelector('.TodoFilterContainer');
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

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