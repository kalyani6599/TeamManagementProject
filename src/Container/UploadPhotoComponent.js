import React, { Component } from "react";
import PlayerService from "../Service/PlayerService";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
class UploadPhotoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.match.params.playerId,
      playerFile: null,
    };

    // this.onclickUpload = this.onclickUpload.bind(this);
    // this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
  }

  changePlayerImageHandler = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  savePlayerPhoto = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("file", this.state.image, this.state.image.name);
    let url = "http://localhost:8080/api/player/upload/" + this.state.playerId;
    axios
      .put(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        let image = { id: this.state.id, link: res.data };
        PlayerService.uploadPhoto(
          this.state.playerId,
          image
        ).then((result) => {});
        console.log(res.data);
        alert("Image Upload Successfully");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="photoPage">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center mt-4 headingTitle">
                  Add Player Image
                </h3>
                <div className="card-body">
                  <fieldset>
                    <form>
                      <div className="form-group">
                        <label>Select Image</label>
                        <input
                          type="file"
                          name="playerFile"
                          id="playerFile"
                          className="form-control"
                          value={this.state.playerFile}
                          accept="image/png, image/jpeg"
                          onChange={this.changePlayerImageHandler}
                          required
                        />
                      </div>

                      <button className="button" onClick={this.savePlayerPhoto}>
                        Save
                      </button>
                      <Link to="/playerInfo">
                        <input
                          className="button"
                          type="submit"
                          value="Back"
                          style={{ backgroundColor: "black" }}
                        />
                      </Link>
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//   onclickUpload = (e) => {
//     const formData = new FormData();
//     formData.append("file", this.state.newfile, this.state.newfile.name);

//     PlayerService.uploadPhoto(this.state.playerId, formData).then((res) => {
//       // if (res.ok) {
//       alert("File uploaded successfully.");
//       // }
//     });
//   };
//   onFileChangeHandler = (e) => {
//     e.preventDefault();
//     this.setState({
//       newfile: e.target.files[0],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="form-group files color">
//                 <label>Upload Your File </label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   name="file"
//                   onChange={this.onFileChangeHandler}
//                 />
//                 <button onClick={this.onclickUpload}>Upload</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default UploadPhotoComponent;
