import React, { Component } from "react";
import classes from "../Component/Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Clock from "react-digital-clock";
class Header extends React.Component {
  render() {
    return (
      <div className={classes.parent}>
        <div className={classes.header}>
          <div className={classes.child1}>
            <div className={classes.clock}>
              <Clock />
            </div>
          </div>
          <div className={classes.child5}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Team or Description"
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
              />
            </Link>
          </div>
          <div className={classes.child7} onClick={this.props.ShowProfile}>
            <i class="fa fa-user fa-3x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
