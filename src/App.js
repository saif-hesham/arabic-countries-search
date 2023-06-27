import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);

  const onChangeHandler = e => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/lang/arabic')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const searchedCountries = countries.filter(country => {
    const countrySearch = country.name.common.toLowerCase();
    return countrySearch.includes(searchValue);
  });

  return (
    <div className='App'>
      <SearchBox
        placeholder='Search Country'
        className='search-box'
        onChange={onChangeHandler}
      />

      <CardList countries={searchedCountries} />
    </div>
  );
};

export default App;
