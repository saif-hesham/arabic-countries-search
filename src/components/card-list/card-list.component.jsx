import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    const  {countries}  = this.props;
    return (
      <div className="card-list">
        {countries.map(country => {
          return <Card key={country.cca2} country={country} />
        })}
      </div>
    );
  }
}

export default CardList;
