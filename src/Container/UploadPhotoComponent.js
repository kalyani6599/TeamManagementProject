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
    // alert("File uploaded successfully.");
    // const file = new FormData();
    // file.append("file", this.state.newfile);
    // for (var fd of file) {
    //   console.log(fd);
    // }

    const formData = new FormData();
    formData.append("file", this.state.newfile);
    // for (let i = 0; i < e.target.files.length; i++) {
    //   formData.append("file", e.target.files[i]);
    // }
    for (var fd of formData) {
      console.log(fd);
    }

    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    PlayerService.uploadPhoto(this.state.playerId, formData).then((res) => {
      if (res.ok) {
        console.log(res.data);
        this.setState({
          photo: res.data[1].name,
          file: res.data[1],
        });
        console.log(this.state.photo);
        console.log(this.state.file);
        alert("File uploaded successfully.");
      }
    });
  };
  onFileChangeHandler = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", this.state.newfile);
    // // for (let i = 0; i < e.target.files.length; i++) {
    // //   formData.append("file", e.target.files[i]);
    // // }
    // for (var fd of formData) {
    //   console.log(fd);
    // }

    //
    // PlayerService.uploadPhoto(this.state.playerId, formData, config).then(
    //   (res) => {
    //     if (res.ok) {
    //       console.log(res.data);
    //       alert("File uploaded successfully.");
    //     }
    //   }
    // );

    // for (var fd of file) {
    //   console.log(fd);
    // }
    this.setState({
      newfile: e.target.files[0],
    });
    // console.log(this.state.file);
    // console.log(e.target);
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
