import './card-list.styles.css';
import Card from '../card/card.component';
import { Country } from '../../App';
type cardListProps = {
  countries: Country[];
};
const CardList = ({ countries }: cardListProps) => (
  <div className='card-list'>
    {countries.map(country => {
      return <Card key={country.cca2} country={country} />;
    })}
  </div>
);

export default CardList;
