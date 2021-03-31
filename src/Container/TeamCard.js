import React, { Component } from "react";
import team from "../Component/TeamInformation";
import classes from "./HomePage.module.css";

class TeamCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={classes.MainDiv}>
          {team.map((value) => {
            return (
              <>
                <div className={classes.MainCard}>
                  <img className={classes.BanImg} src={value.src}></img>
                  <h2 className={classes.Title}>{value.title}</h2>
                  <h3 className={classes.Title} onClick={this.searchTeam}>
                    {value.team}
                  </h3>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default TeamCard;
