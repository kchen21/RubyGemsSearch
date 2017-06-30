import React from 'react';

class GemSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      searchResults: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName) {
    return (e) => {
      return this.setState({ [propertyName]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchGemSearchResults(this.state.keyword).then(() => {
      this.setState({ searchResults: this.props.searchResults });
    });
  }

  render() {
    const gemList = [];

    return (
      <div>
        <h1>Search Gems</h1>
        <form className="gem-search-form" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            onChange={ this.handleChange("keyword") }
            value={ this.state.keyword }
            />
          <input type="submit" style="position: absolute; left: -9999px"/>
          <img src={ windows.assets.magnifying_glass } />
        </form>
        <ul>
          { gemList }
        </ul>
        { this.state.searchResults }
      </div>
    );
  }

}

export default GemSearch;
