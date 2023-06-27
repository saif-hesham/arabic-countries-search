import './card.styles.css';
const Card = ({ country }) => {
  let countryName = country.name.common;

  if (countryName === 'Israel') return;

  const { population } = country;
  const { png, alt } = country.flags;
  // const countryId = country.cca2;

  return (
    <div className='card-container'>
      <img src={png} alt={alt} />
      <h2>{countryName}</h2>
      <p className='text'>{`${countryName}'s population is ${population}`}</p>
    </div>
  );
};

export default Card;
