import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  placeholder: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ placeholder, onChange, className }: SearchBoxProps) => (
  <input
    placeholder={placeholder}
    type='search'
    onChange={onChange}
    className={className}
  />
);

export default SearchBox;
