import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";

class UploadPhotoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
    };
  }
  onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      file: e.target.value,
    });
    PlayerService.uploadPhoto().then((res) => {
      if (res.ok) {
        console.log(res.data);
        alert("File uploaded successfully.");
      }
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPhotoComponent;
