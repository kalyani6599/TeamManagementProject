import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";
class DownloadPlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      playerPhoto: "",
    };
  }

  downloadClick = (e) => {
    PlayerService.downloadPhoto(this.state.playerId).then((res) => {
      const blob = new Blob(res.data);
      const playerPhoto = URL.createObjectURL(blob);
      this.setState({ playerPhoto: playerPhoto }, () => {
        URL.revokeObjectURL(playerPhoto); // free up storage--no longer needed.
        this.setState({ playerPhoto: "" });
      });
    });
  };

  // const filename = response.headers

  //   .get("Content-Disposition")
  //   .split("filename=")[1];
  // response.then(() => {
  //   let url = window.URL.createObjectURL();
  //   let a = document.createElement("a");
  //   a.href = url;
  //   a.download = filename;
  //   a.click();
  // });
  // this.setState({ playerPhoto: res.data });
  // console.log(res.data);

  //   PlayerService.downloadPhoto(this.state.playerId).then((res) => {

  //     const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
  //     response.blob().then(blob => {
  //       let url = window.URL.createObjectURL(blob);
  //       let a = document.createElement('a');
  //       a.href = url;
  //       a.download = filename;
  //       a.click();

  //     // this.setState({ playerPhoto: res.data });
  //     // console.log(res.data);

  //   console.log(this.state.playerPhoto);

  // });

  // componentDidMount() {}

  render() {
    return (
      <>
        <button onClick={this.downloadClick}>Download</button>
        <a href={this.state.playerPhoto}>
          <img src={this.state.playerPhoto} alt="photo of player" />
        </a>
      </>
    );
  }
}

export default DownloadPlayerComponent;
