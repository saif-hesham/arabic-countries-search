import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = { countries: [], searchValue: '' };
  }

  onChangeHandler = e => {
    const searchValue = e.target.value.toLowerCase();
    console.log('hey');
    this.setState(() => {
      return { searchValue };
    });
  };

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/lang/arabic')
      .then(res => res.json())
      .then(data =>
        this.setState(() => {
          return { countries: data };
        })
      );
  }

  render() {
    const { countries, searchValue } = this.state;
    const { onChangeHandler } = this;
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
  }
}

export default App;
