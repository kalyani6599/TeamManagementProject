import React from "react";
import classes from "../Container/Login.module.css";
import RegisterService from "../Service/RegisterService";

class Login extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.state = {
      emailId: "",
      password: "",
    };

    this.onChangePassHandler = this.onChangePassHandler.bind(this);
    this.onChangeMailHandler = this.onChangeMailHandler.bind(this);
  }

  onChangeMailHandler = (e) => {
    this.setState({
      emailId: e.target.value,
    });
  };

  onChangePassHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onLoginClick = (e) => {
    e.preventDefault();

    let login = {
      emailId: this.state.emailId,
      password: this.state.password,
    };

    RegisterService.signIn(login)
      .then((res) => {
        alert("Login Successful");
        this.props.history.push("/home");
        console.log(JSON.stringify(login));
      })
      .catch((res) => {
        alert("Incorrect Credentials :(");
      });
  };
  render() {
    return (
      <>
        <h1 className={classes.head}> Team Management Application</h1>
        <div className={classes.MainPage}>
          <div className="row">
            <div className={classes.parent}>
              <div className="col-md-6">
                <form className={classes.Login} onSubmit={this.onLoginClick}>
                  <h1>Sign In</h1>

                  <input
                    className={classes.InputField}
                    type="email"
                    name="emailId"
                    onChange={this.onChangeMailHandler}
                    value={this.state.emailId}
                    placeholder="Enter Email Id"
                  />

                  <input
                    className={classes.InputField}
                    type="password"
                    name="password"
                    onChange={this.onChangePassHandler}
                    value={this.state.password}
                    placeholder="Enter Password"
                  />

                  <input
                    className={classes.Button}
                    type="submit"
                    value="Login"
                  />
                </form>
              </div>

              <div className="col-md-6">
                <img
                  classname={classes.img}
                  src="https://www.insidesport.co/wp-content/uploads/2019/12/Banner.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
