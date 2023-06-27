import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ countries }) => (
  <div className='card-list'>
    {countries.map(country => {
      return <Card key={country.cca2} country={country} />;
    })}
  </div>
);

export default CardList;
