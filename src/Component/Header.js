import React, { Component } from "react";
import classes from "../Component/Header.module.css";
//import "../Container/TeamCart.css";
import SearchIcon from "@material-ui/icons/Search";
import { hashHistory } from "react-router-dom";
import { ReactDOM } from "react-dom";
import Statistics from "./Statistics";
import { Link } from "react-router-dom";
import Clock from "react-digital-clock";
class Header extends React.Component {
  render() {
    return (
      <div className={classes.parent}>
        <div className={classes.header}>
          <div className={classes.child1}>
            <Clock />
          </div>
          <div className={classes.child5}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search this blog"
                onChange={this.props.search}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.props.searchButtonClick}
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
          <div className={classes.child3}>
            <input
              className={classes.Button}
              type="button"
              value="Show Player"
              onClick={this.props.ShowEvent}
            />
          </div>

          <div className={classes.child4}>
            <Link to="/show-statistic">
              <input
                className={classes.Button}
                type="button"
                value="Statistics"
                // onClick={this.props.ShowStatistic}
              />
            </Link>
          </div>
          {/* <div className={classes.child6}>
            <Link to="/show-statistic">
              <input
                className={classes.Button}
                type="button"
                value="Statistics"
                // onClick={this.props.ShowStatistic}
              />
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
