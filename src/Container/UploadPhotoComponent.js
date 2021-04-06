import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";

class UploadPhotoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      newfile: "",
      photo: "",
      file: "",
    };

    this.onclickUpload = this.onclickUpload.bind(this);
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
  }

  onclickUpload = (e) => {
    const formData = new FormData();
    formData.append("file", this.state.newfile, this.state.newfile.name);

    PlayerService.uploadPhoto(this.state.playerId, formData).then((res) => {
      // if (res.ok) {
      alert("File uploaded successfully.");
      // }
    });
  };
  onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      newfile: e.target.files[0],
    });
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
                  name="file"
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
