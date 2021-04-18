import React, { Component } from "react";
import classes from "../Container/UpdatePlayer.module.css";
import PlayerService from "../Service/PlayerService";
import { FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
class UpdatePlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      playerFirstName: "",
      playerLastName: "",
      price: "",
      teamName: "",
      status: "",
      description: "",
    };

    this.OnUpdateClick = this.OnUpdateClick.bind(this);
    this.ChangeFirstNameHandler = this.ChangeFirstNameHandler.bind(this);
    this.ChangeLastNameHandler = this.ChangeLastNameHandler.bind(this);
    this.ChangePriceHandler = this.ChangePriceHandler.bind(this);
    this.ChangeTeamNamehandler = this.ChangeTeamNamehandler.bind(this);
    this.ChangeStatushandler = this.ChangeStatushandler.bind(this);
    this.Changedescriptionhandler = this.Changedescriptionhandler.bind(this);
  }

  componentDidMount() {
    PlayerService.getPlayerById(this.state.playerId).then((res) => {
      let player = res.data;
      this.setState({
        playerId: player.playerId,
        playerFirstName: player.playerFirstName,
        playerLastName: player.playerLastName,
        price: player.price,
        teamName: player.teamName,
        status: player.status,
        description: player.description,
        fileName: player.fileName,
      });
    });
  }

  ChangeFirstNameHandler = (e) => {
    this.setState({
      playerFirstName: e.target.value,
    });
  };
  ChangeLastNameHandler = (e) => {
    this.setState({
      playerLastName: e.target.value,
    });
  };

  ChangePriceHandler = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  ChangeTeamNamehandler = (e) => {
    this.setState({
      teamName: e.target.value,
    });
  };

  ChangeStatushandler = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  Changedescriptionhandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  OnUpdateClick = (e) => {
    e.preventDefault();

    let player = {
      playerId: this.state.playerId,
      playerFirstName: this.state.playerFirstName,
      playerLastName: this.state.playerLastName,
      price: this.state.price,
      teamName: this.state.teamName,
      status: this.state.status,
      description: this.state.description,
      fileName: this.state.fileName,
    };

    PlayerService.updatePlayer(this.state.playerId, player).then((res) => {
      alert("Player Updated Successful");
      player = res.data;
      console.log(player);
      this.props.history.push("/playerInfo");
    });
  };

  render() {
    return (
      <div>
        <div className={classes.MainPage}>
          <form className={classes.Login} onSubmit={this.OnUpdateClick}>
            <h1 className={classes.Title}>Update Player</h1>

            <div className="dis">
              <label for="playerFirstName">First Name</label>
              <input
                className={classes.InputField}
                type="text"
                name="playerFirstName"
                onChange={this.ChangeFirstNameHandler}
                value={this.state.playerFirstName}
                placeholder="Enter First Name"
              />

              <label for="playerLastName">Last Name</label>
              <input
                className={classes.InputField}
                type="text"
                name="playerLastName"
                onChange={this.ChangeLastNameHandler}
                value={this.state.playerLastName}
                placeholder="Enter Last Name"
              />
              <label for="price">Price</label>
              <input
                className={classes.InputField}
                type="text"
                name="price"
                onChange={this.ChangePriceHandler}
                value={this.state.price}
                placeholder="Enter Price in Cr."
              />

              <FormGroup>
                <label for="teamName">Team Name</label>

                <select
                  name="teamName"
                  className="form-control"
                  value={this.state.teamName}
                  onChange={this.ChangeTeamNamehandler}
                >
                  {/* <option></option> */}
                  <option>MI</option>
                  <option>CSK</option>
                  <option>RCB</option>
                  <option>KKR</option>
                  <option>DC</option>
                  <option>SH</option>
                  <option>PK</option>
                  <option>RR</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label for="status">Player Status</label>
                <select
                  name="status"
                  className="form-control"
                  value={this.state.status}
                  onChange={this.ChangeStatushandler}
                >
                  {/* <option></option> */}
                  <option value="ON BENCH">On Bench</option>
                  <option value="PLAYING">Playing</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label for="description">Player Description</label>
                <select
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.Changedescriptionhandler}
                >
                  {/* <option></option> */}
                  <option>All Rounder</option>
                  <option>Bowler</option>
                  <option>Batsman</option>
                </select>
              </FormGroup>
              <label for="fileName">Photo</label>
              <input
                className={classes.InputField}
                type="text"
                name="fileName"
                value={this.state.fileName}
                disabled
              />

              <input
                className={classes.Button}
                type="submit"
                value="Update player"
                onClick={this.OnUpdateClick}
              />
              <Link to="/playerInfo">
                <input className={classes.Button1} type="submit" value="Back" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdatePlayerComponent;
