import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";
class DownloadPlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      photo: "",
    };
  }

  componentDidMount() {
    PlayerService.downloadPhoto(this.state.playerId).then((res) => {
      this.setState({ photo: res.data });
    });
  }

  render() {
    return <div>{this.state.photo}</div>;
  }
}

export default DownloadPlayerComponent;
