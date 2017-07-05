import React from 'react';
import { merge } from 'lodash';

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

  handleStarClick(action, gemOrDep) {
    if (action === "unfavorite") {
      return (e) => {
        this.props.deleteFavorite(gemOrDep.favorite_id).then(() => {
          const newSearchResults = merge({}, this.state.searchResults);

          const unfavoriteAllDependencyInstances = () => {
            for (let gemName in newSearchResults) {
              let gem = newSearchResults[gemName];
              if (gem.dependencies[gemOrDep.name]) {
                gem.dependencies[gemOrDep.name].favorited = false;
              }
            }
          };

          if (gemOrDep.is_dep) {
            unfavoriteAllDependencyInstances();
          }

          if (newSearchResults[gemOrDep.name]) {
            newSearchResults[gemOrDep.name].favorited = false;
            unfavoriteAllDependencyInstances();
          }

          this.setState({
            searchResults: newSearchResults
          });
        });
      }
    } else if (action === "favorite") {
      return (e) => {
        let favorite = {
          name: gemOrDep.name,
          link: gemOrDep.project_uri
        };
        this.props.createFavorite(favorite).then((favorites) => {
          const newSearchResults = merge({}, this.state.searchResults);

          const favoriteAllDependencyInstances = () => {
            for (let gemName in newSearchResults) {
              let gem = newSearchResults[gemName];
              if (gem.dependencies[gemOrDep.name]) {
                gem.dependencies[gemOrDep.name].favorited = true;
                gem.dependencies[gemOrDep.name].favorite_id = favorites[gemOrDep.name].id;
              }
            }
          }

          if (gemOrDep.is_dep) {
            favoriteAllDependencyInstances();
          }

          if (newSearchResults[gemOrDep.name]) {
            newSearchResults[gemOrDep.name].favorited = true;
            newSearchResults[gemOrDep.name].favorite_id = favorites[gemOrDep.name].id;
            favoriteAllDependencyInstances();
          }

          this.setState({
            searchResults: newSearchResults
          });
        });
      }
    }
  }

  render() {
    const renderStar = (gemOrDep) => {
      if (gemOrDep.favorited) {
        return (
          <button onClick={ this.handleStarClick("unfavorite", gemOrDep) }>
            <img src={ window.assets.star_blue } />
          </button>
        );
      } else {
        return (
          <button onClick={ this.handleStarClick("favorite", gemOrDep) }>
            <img src={ window.assets.star_gray }  />
          </button>
        );
      }
    }

    const renderDependenciesList = (gem) => {
      let dependenciesList = [];
      let dependencies = gem.dependencies;

      if (Object.keys(dependencies).length === 0) {
        dependenciesList.push(
          <li key="0"><p>None</p></li>
        );
      } else {
        for (let dependencyName in dependencies) {
          let dependencyInfo = dependencies[dependencyName];
          dependenciesList.push(
            <li className="dependency-list-item" key={ dependencyName }>
              <a href={ dependencyInfo.project_uri }>{ dependencyInfo.name }</a>
              { renderStar(dependencyInfo) }
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
