
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const SearchBar = ({setValueApi, githubValue}) => {


  const inputValue = (event) => {
		setValueApi(event.target.value);
	};

 const formSubmit = (event) => {
		event.preventDefault()
    githubValue()


	};


  return (
    <div className="searchbar">
      <form onSubmit={formSubmit}> 
  <input classNam="inputClass" type="text" onChange={inputValue} placeholder="Rechercher un repo"/>
</form>
    </div>
  );
}

export default SearchBar;

SearchBar.proptypes = {
  newValue: PropTypes.func.isRequired,
};
