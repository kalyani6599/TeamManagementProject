import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";

class UploadPhotoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      newfile: "",
    };

    this.onclickUpload = this.onclickUpload.bind(this);
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
  }

  onclickUpload = (e) => {
    alert("File uploaded successfully.");
    const file = new FormData();
    file.append("file", this.state.newfile);
    for (var fd of file) {
      console.log(fd);
    }
    PlayerService.uploadPhoto(this.state.playerId, file).then((res) => {
      if (res.ok) {
        console.log(file);
        alert("File uploaded successfully.");
      }
    });
  };
  onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      newfile: e.target.files[0],
    });
    console.log(this.state.file);
    console.log(e.target);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group files color">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
                  name="file1"
                  onChange={this.onFileChangeHandler}
                />
                <button onClick={this.onclickUpload}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPhotoComponent;
