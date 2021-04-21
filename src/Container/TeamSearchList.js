import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";
import SearchBar from "../Component/SearchBar";
import "../App.css";

import { Link } from "react-router-dom";
class TeamSearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      playerFirstName: this.props.match.params.playerFirstName,
      playerLastName: this.props.match.params.playerLastName,
      teamName: this.props.match.params.teamName,
    };

    this.addplayer = this.addplayer.bind(this);
    this.editplayer = this.editplayer.bind(this);
    this.deleteplayer = this.deleteplayer.bind(this);
    this.viewplayer = this.viewplayer.bind(this);
    this.download = this.download.bind(this);
    this.onClickSearchName = this.onClickSearchName.bind(this);
  }

  componentDidMount() {
    PlayerService.searchByteamName(this.state.teamName).then((res) => {
      this.setState({
        players: res.data.filter(
          (player) => player.teamName === this.state.teamName
        ),
      });
    });
  }

  onClickSearchName = (e) => {
    e.preventDefault();
    this.props.history.push(
      `/search-by-firstname/${this.state.playerFirstName}`
    );

    PlayerService.searchByFirstName(this.state.playerFirstName).then((res) => {
      this.setState({
        players: res.data.filter(
          (player) => player.playerFirstName === this.state.playerFirstName
        ),
      });
    });
  };

  onChangeSearch = (e) => {
    this.setState({
      playerFirstName: e.target.value,
    });
  };

  // uploadPhoto(playerId) {
  //   PlayerService.uploadPhoto(playerId).then((res) => {
  //     // alert("Photo Uploaded Successfully ;)");
  //     this.props.history.push(`/upload-photo/${playerId}`);
  //   });
  // }
  addplayer(id) {
    this.props.history.push(`/add-player/${id}`);
  }

  editplayer(playerId) {
    this.props.history.push(`/update-player/${playerId}`);
  }

  download(playerId) {
    PlayerService.downloadPhoto(playerId).then((res) => {
      alert("Downloaded-----");
    });
  }
  deleteplayer(playerId) {
    PlayerService.deletePlayer(playerId).then((res) => {
      this.setState({
        players: this.state.players.filter(
          (player) => player.playerId !== playerId
        ),
      });
    });
  }

  viewplayer(playerId) {
    this.props.history.push(`/view-player/${playerId}`);
  }

  render() {
    return (
      <>
        <div className="topBar">
          <SearchBar
            searchPlayer={this.onClickSearchName}
            SearchChange={this.onChangeSearch}
          />
        </div>
        <Link to="/playerInfo">
          <input
            className="button1"
            type="submit"
            value="Back"
            style={{ marginLeft: "100px" }}
          />
        </Link>
        <div className="container">
          <div className="form-group "></div>
          <div className="row">
            <table
              id="tbname"
              className="table  table-hover table-bordered table-color table-md table-responsive"
            >
              <thead className="table-dark">
                <tr>
                  <th>Player Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Price(in Cr)</th>
                  <th>Team Name</th>
                  <th>Player Status</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th colSpan="3" style={{ textAlign: "center" }}>
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="table-light text-center">
                {this.state.players.map((player) => (
                  <tr key={player.playerId}>
                    <td>{player.playerId}</td>
                    <td>{player.playerFirstName}</td>
                    <td>{player.playerLastName}</td>
                    <td>{player.price}</td>
                    <td>{player.teamName}</td>
                    <td>{player.status}</td>
                    <td>{player.description}</td>
                    <td>{player.photos}</td>
                    <td>
                      <button
                        onClick={() => this.editplayer(player.playerId)}
                        className="btn btn-info"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteplayer(player.playerId)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>

                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewplayer(player.playerId)}
                        className="btn btn-info"
                      >
                        View
                      </button>
                    </td>
                    {/* <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.uploadPhoto(player.playerId)}
                        className="btn btn-info"
                      >
                        Upload photo
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default TeamSearchList;
