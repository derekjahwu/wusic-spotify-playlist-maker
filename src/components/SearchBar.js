import React from 'react';
import '../stylesheets/SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

search = (e) => {
    e.preventDefault();
  this.props.onSearch(this.state.term)
}

handleTermChange = (e) => {
    this.setState({term: e.target.value})
}

render() {
    return (
    <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
    </div>
    )   
    }
}

export default SearchBar