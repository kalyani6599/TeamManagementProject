import React from "react";
import { render } from "@testing-library/react";
import classes from "../Container/AddPlayer.module.css";
import { FormGroup } from "react-bootstrap";

import PlayerService from "../Service/PlayerService";

class AddPlayerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: "",
      playerFirstName: "",
      playerLastName: "",
      price: "",
      teamName: "",
      status: "",
      description: "",
      id: this.props.match.params.id,
      //  id: this.props.match.params.id,
    };

    this.OnAddClick = this.OnAddClick.bind(this);
    this.ChangeFirstNameHandler = this.ChangeFirstNameHandler.bind(this);
    this.ChangeLastNameHandler = this.ChangeLastNameHandler.bind(this);
    this.ChangePriceHandler = this.ChangePriceHandler.bind(this);
    this.ChangeTeamNamehandler = this.ChangeTeamNamehandler.bind(this);
    this.ChangeStatushandler = this.ChangeStatushandler.bind(this);
    this.Changedescriptionhandler = this.Changedescriptionhandler.bind(this);
  }

  componentDidMount() {
    if (this.props.location.player) {
      this.setState({
        id: this.props.location.user.id,
      });
    }
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

  OnAddClick = (e) => {
    e.preventDefault();

    let player = {
      playerId: this.state.playerId,
      playerFirstName: this.state.playerFirstName,
      playerLastName: this.state.playerLastName,
      price: this.state.price,
      teamName: this.state.teamName,
      status: this.state.status,
      description: this.state.description,
      id: this.props.match.params.id,
    };

    console.log(player);

    PlayerService.addPlayer(this.state.id, player).then((res) => {
      alert("Player Added Successful");
      this.props.history.push("/playerInfo");
      //console.log(JSON.stringify(player));
    });
    // .catch((res) => {
    //   alert("Error occurs :(");
    // });
  };

  render() {
    return (
      <div className={classes.MainPage}>
        <form className={classes.Login} onSubmit={this.OnAddClick}>
          <h1 className={classes.Title}>Add Player</h1>

          <input
            className={classes.InputField}
            type="text"
            name="playerFirstName"
            onChange={this.ChangeFirstNameHandler}
            value={this.state.playerFirstName}
            placeholder="Enter First Name"
          />

          <input
            className={classes.InputField}
            type="text"
            name="playerLastName"
            onChange={this.ChangeLastNameHandler}
            value={this.state.playerLastName}
            placeholder="Enter Last Name"
          />

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
              <option></option>
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
              <option></option>
              <option value="ON_BENCH">On Bench</option>
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
              <option></option>
              <option value="ALL_ROUNDER">All Rounder</option>
              <option value="BOWLER">Bowler</option>
              <option value="BATSMAN">Batsman</option>
            </select>
          </FormGroup>

          <input
            className={classes.Button}
            type="submit"
            value="Add player"
            onClick={this.OnAddClick}
          />
        </form>
      </div>
    );
  }
}

export default AddPlayerComponent;
