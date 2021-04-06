import React from "react";
import PlayerService from "../Service/PlayerService";
import "../App.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import InfoHeader from "./../Container/InfoHeader";
class ListPlayerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      userId: "",
      playerFirstName: "",
      playerLastName: "",
    };

    this.editplayer = this.editplayer.bind(this);
    this.deleteplayer = this.deleteplayer.bind(this);
    this.viewplayer = this.viewplayer.bind(this);
    this.downloadPhoto = this.downloadPhoto.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onClickSearchName = this.onClickSearchName.bind(this);
  }

  componentDidMount() {
    PlayerService.getPlayerInfo().then((res) => {
      this.setState({ players: res.data });
    });
  }

  onClickSearchName = (e) => {
    e.preventDefault();
    this.props.history.push(`/search-name/${this.state.playerFirstName}`);
  };

  onChangeSearch = (e) => {
    this.setState({
      playerFirstName: e.target.value,
    });
  };

  downloadPhoto(playerId) {
    PlayerService.downloadPhoto(playerId).then((res) => {
      alert("Downloaded");

      this.props.history.push(`/download-player/${playerId}`);
    });
  }

  uploadPhoto(playerId) {
    this.props.history.push(`/upload-photo/${playerId}`);
  }

  editplayer(playerId) {
    this.props.history.push(`/update-player/${playerId}`);
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

  onclickAddPlayer = (e) => {
    this.props.history.push(`/add-player${this.state.userId}`);
  };

  render() {
    return (
      <>
        <div>
          <InfoHeader
            addEvent={this.onclickAddPlayer}
            searchPlayer={this.onClickSearchName}
            SearchChange={this.onChangeSearch}
          />
        </div>
        <div className="container">
          <div className="tablestyle">
            <h2 className="text-center mt-4">Player List</h2>
            <ReactHTMLTableToExcel
              className="btn btn-danger"
              table="tbname"
              filename="ReportExcel"
              sheet="Sheet"
              id="Export"
              buttonText="Export excel"
            />
            <div className="form-group"></div>
            <div className="row">
              <table
                id="tbname"
                className="table table-striped table-bordered table-color"
              >
                <thead>
                  <tr>
                    <th>Player Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Price(in Cr)</th>
                    <th>Team Name</th>
                    <th>Player Status</th>
                    <th>Description</th>
                    <th>Photo</th>
                    <th colSpan="4" style={{ textAlign: "center" }}>
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.players.map((player) => (
                    <tr key={player.playerId}>
                      <td>{player.playerId}</td>
                      <td>{player.playerFirstName}</td>
                      <td>{player.playerLastName}</td>
                      <td>{player.price}</td>
                      <td>{player.teamName}</td>
                      <td>{player.status}</td>
                      <td>{player.description}</td>
                      <td onClick={this.downloadPhoto}>{player.photos}</td>
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
                      <td>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.uploadPhoto(player.playerId)}
                          className="btn btn-info"
                        >
                          Upload photo
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ListPlayerComponent;
