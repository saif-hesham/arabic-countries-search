import './search-box.styles.css';

const SearchBox = ({ placeholder, onChange, className }) => (
  <input
    placeholder={placeholder}
    type='search'
    onChange={onChange}
    className={className}
  />
);

export default SearchBox;
