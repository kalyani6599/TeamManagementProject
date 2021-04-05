import React, { Component } from "react";
import classes from "../Component/Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
class SearchBar extends Component {
  render() {
    return (
      <>
        <div className={classes.header}>
          <div className={classes.childSearch}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search BY First Name"
                onChange={this.props.SearchChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.props.searchPlayer}
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
