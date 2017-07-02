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
    function renderDependenciesList(gem) {
      let dependenciesList = [];
      let dependencies = gem.dependencies.runtime;

      if (dependencies.length === 0) {
        dependenciesList.push(
          <li key="0"><p>None</p></li>
        );
      } else {
        for (let i = 0; i < dependencies.length; i++) {
          let dependency = dependencies[i];
          dependenciesList.push(
            <li key={ i }>
              <p>
                { dependency.name }
              </p>
            </li>
          );
        }
      }

      return dependenciesList;
    };

    let searchResults = this.state.searchResults;

    function renderGemList() {
      let gemList = [];
      let gems = searchResults.gems || [];

      for (let i = 0; i < gems.length; i++) {
        let gem = gems[i];
        gemList.push(
          <li className="gem-list-item" key={ i }>
            <a href={ gem.project_uri }>{ gem.name }</a>
            <h5>INFORMATION</h5>
            <p>{ gem.info }</p>
            <h5>DEPENDENCIES</h5>
            <ul>
              { renderDependenciesList(gem) }
            </ul>
          </li>
        );
      }

      return gemList;
    };

    return (
      <div className="gem-search">
        <h1>Search Gems</h1>
        <form className="gem-search-form" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            onChange={ this.handleChange("keyword") }
            value={ this.state.keyword }
            placeholder="Search for a gem..."
            />
          <input type="submit" style={{ position: 'absolute', left: '-9999px'}} />
          <img src={ window.assets.magnifying_glass } />
        </form>
        <ul className="gem-list">
          { renderGemList() }
        </ul>
      </div>
    );
  }
}

export default GemSearch;
