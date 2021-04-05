import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";
import "../App.css";
import classes from "../Container/Register.module.css";
import { Link } from "react-router-dom";

class ViewPlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      player: {},
    };
  }

  componentDidMount() {
    PlayerService.getPlayerById(this.state.playerId).then((res) => {
      this.setState({ player: res.data });
    });
  }

  render() {
    return (
      <div className="card-view">
        <div className="card col-md-8 offset-md-2">
          <h3 className="text-center mt-4">View Player Details</h3>
          <div className="card-body cb">
            <div className="row">
              <label>First Name : </label>&nbsp;
              <div>{this.state.player.playerFirstName}</div>
            </div>
            <div className="row">
              <label>Last Name : </label>&nbsp;
              <div>{this.state.player.playerLastName}</div>
            </div>
            <div className="row">
              <label>Price : </label>&nbsp;
              <div>{this.state.player.price}</div>
            </div>
            <div className="row">
              <label>Team Name : </label>&nbsp;
              <div>{this.state.player.teamName}</div>
            </div>
            <div className="row">
              <label>Player Status : </label>&nbsp;
              <div>{this.state.player.status}</div>
            </div>
            <div className="row">
              <label>Description : </label>&nbsp;
              <div>{this.state.player.description}</div>
            </div>
            <div className="row">
              <Link to="/playerInfo">
                <button className={classes.Button}>Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPlayerComponent;
