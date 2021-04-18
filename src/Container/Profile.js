import classes from "../Container/Login.module.css";
import React, { Component } from "react";
import RegisterService from "../Service/RegisterService";
import { Link } from "react-router-dom";
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: this.props.match.params.emailId,
      user: {},
    };
  }

  componentDidMount() {
    RegisterService.getUser(this.state.emailId).then((res) => {
      this.setState({ user: res.data });
      console.log(this.state.user);
    });
  }
  render() {
    return (
      <div>
        <div className="card-view">
          <div className="card col-md-8 offset-md-2">
            <h3 className="text-center mt-4">View User Details</h3>
            <div className="card-body cb">
              <div className="row">
                <label>User Id : </label>&nbsp;
                <div>{this.state.user.userId}</div>
              </div>
              <div className="row">
                <label>User Name : </label>&nbsp;
                <div>{this.state.user.userName}</div>
              </div>
              <div className="row">
                <label>Email ID : </label>&nbsp;
                <div>{this.state.user.emailId}</div>
              </div>
              <div className="row">
                <label>Phone Number : </label>&nbsp;
                <div>{this.state.user.phone}</div>
              </div>
              <div className="row">
                <Link to={`/home/${this.state.emailId}`}>
                  <input
                    className={classes.Button1}
                    type="submit"
                    value="Back"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
