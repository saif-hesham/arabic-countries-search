import './App.css';
import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import getApiData from './utils/data.util';

export type Country = {
  name: { common: string };
  cca2: string;
  population: number;
  flags: { png: string; alt: string };
};
const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getApiData<Country[]>(
        'https://restcountries.com/v3.1/lang/arabic'
      );
      setCountries(data);
    };
    getData();
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
