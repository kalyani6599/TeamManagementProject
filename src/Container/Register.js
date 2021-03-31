import React from "react";
import classes from "../Container/Register.module.css";
import RegisterService from "../Service/RegisterService";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      userName: "",
      emailId: "",
      phone: "",
      password: "",
    };

    this.ChangeNameHandler = this.ChangeNameHandler.bind(this);
    this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this);
    this.ChangePhoneHandler = this.ChangePhoneHandler.bind(this);
    this.ChangePasswordHandler = this.ChangePasswordHandler.bind(this);
  }

  ChangeNameHandler = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  ChangeEmailHandler = (e) => {
    this.setState({
      emailId: e.target.value,
    });
  };

  ChangePhoneHandler = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  ChangePasswordHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onRegisterClick = (e) => {
    e.preventDefault();
    let user = {
      id: null,
      userName: this.state.userName,
      emailId: this.state.emailId,
      phone: this.state.phone,
      password: this.state.password,
    };

    RegisterService.signUp(user).then((res) => {
      alert("Register Successful!");

      this.props.history.push("/login");
      console.log(JSON.stringify(user));

      this.setState({
        id: "",
        userName: "",
        emailId: "",
        phone: "",
        password: "",
      });
    });
  };

  render() {
    return (
      <div className={classes.MainPage}>
        <form className={classes.Login} onSubmit={this.onRegisterClick}>
          <h1>Sign UP</h1>

          <input
            className={classes.InputField}
            type="text"
            name="userName"
            onChange={this.ChangeNameHandler}
            value={this.state.userName}
            placeholder="Enter Username"
          />

          <input
            className={classes.InputField}
            type="email"
            name="emailId"
            onChange={this.ChangeEmailHandler}
            value={this.state.emailId}
            placeholder="Enter Email Id"
          />

          <input
            className={classes.InputField}
            type="tel"
            name="phone"
            onChange={this.ChangePhoneHandler}
            value={this.state.phone}
            placeholder="Enter Mobile Number"
          />

          <input
            className={classes.InputField}
            type="password"
            name="password"
            onChange={this.ChangePasswordHandler}
            value={this.state.password}
            placeholder="Enter Password"
          />

          <input className={classes.Button} type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
