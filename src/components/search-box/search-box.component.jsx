import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        type="search"
        onChange={this.props.onChange}
        className={this.props.className}
      />
    );
  }
}

export default  SearchBox;