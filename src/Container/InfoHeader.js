import React, { Component } from "react";
import classes from "../Container/InfoHeader.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Clock from "react-digital-clock";

class InfoHeader extends React.Component {
  render() {
    return (
      <div className={classes.parent}>
        <div className={classes.header}>
          <div className={classes.child1}>
            <Clock />
          </div>
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

          <div className={classes.child2}>
            <input
              className={classes.Button}
              type="button"
              value="Add Player"
              onClick={this.props.addEvent}
            />
          </div>

          <div className={classes.child4}>
            <Link to="/show-statistic">
              <input
                className={classes.Button}
                type="button"
                value="Statistics"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoHeader;
