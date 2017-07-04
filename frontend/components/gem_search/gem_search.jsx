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
    this.handleStarClick = this.handleStarClick.bind(this);
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

  handleStarClick(action, gem) {
    if (action === "unfavorite") {
      return (e) => {
        this.props.deleteFavorite(gem.id);
      }
    } else if (action === "favorite") {
      return (e) => {
        let favorite = {
          name: gem.name,
          link: gem.project_uri
        };
        this.props.createFavorite(favorite);
      }
    }
  }

  render() {
    const renderStar = (gem) => {
      if (gem.favorited) {
        return (
          <button onClick={ this.handleStarClick("unfavorite", gem) }>
            <img src={ window.assets.star_blue } />
          </button>
        );
      } else {
        return (
          <button onClick={ this.handleStarClick("favorite", gem) }>
            <img src={ window.assets.star_gray }  />
          </button>
        );
      }
    }

    const renderDependenciesList = (gem) => {
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

    const renderGemList = () => {
      let gemList = [];

      for (let gemName in searchResults) {
        let gem = searchResults[gemName];
        gemList.push(
          <li className="gem-list-item" key={ gemName }>
            <a href={ gem.project_uri }>{ gem.name }</a>
            { renderStar(gem) }
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
