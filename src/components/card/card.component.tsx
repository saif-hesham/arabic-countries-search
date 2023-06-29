import './card.styles.css';
import { Country } from '../../App';

type cardProps = {
  country: Country;
};

const Card = ({ country }: cardProps) => {
  let countryName = country.name.common;

  if (countryName === 'Israel') return;

  const { population } = country;
  const { png, alt } = country.flags;

  return (
    <div className='card-container'>
      <img src={png} alt={alt} />
      <h2>{countryName}</h2>
      <p className='text'>{`${countryName}'s population is ${population}`}</p>
    </div>
  );
};

export default Card;
