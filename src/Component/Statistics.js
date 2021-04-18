import React, { Component } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "../Component/Statistics.css";
import { Link } from "react-router-dom";
class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = { Data: {}, Data1: {} };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/playerInfo").then((res) => {
      const ipl = res.data;
      let Description = [];
      let PlayingStatus = [];
      let cnt = [];
      let cntStatus = [];
      let lab = ["ALL ROUNDER", "BATSMAN", "BOWLER"];
      let lab1 = ["ON BENCH", "PLAYING"];
      let count = 0;
      let count1 = 0;
      let count2 = 0;

      let cs = 0;
      let cs1 = 0;

      ipl.forEach((record) => {
        Description.push(record.description);
        PlayingStatus.push(record.status);
      });

      Description.forEach((Item) => {
        if (Item == "ALL_ROUNDER") {
          count = count + 1;
        } else if (Item == "BATSMAN") {
          count1 = count1 + 1;
        } else {
          count2 = count2 + 1;
        }
      });

      PlayingStatus.forEach((Item) => {
        if (Item == "ON_BENCH") {
          cs = cs + 1;
        } else {
          cs1 = cs1 + 1;
        }
      });

      cnt[0] = count;
      cnt[1] = count1;
      cnt[2] = count2;

      cntStatus[0] = cs;
      cntStatus[1] = cs1;

      this.setState({
        Data: {
          labels: lab,
          datasets: [
            {
              label: "Description Ratio",
              data: cnt,
              backgroundColor: ["#FBBF24", "#F87171", "#A78BFA"],
            },
          ],
        },
      });

      this.setState({
        Data1: {
          labels: lab1,
          datasets: [
            {
              label: "Playing Status Ratio",
              data: cntStatus,
              backgroundColor: ["#FBBF24", "#A78BFA"],
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div className="main">
        <Link to="/playerInfo">
          <input className="button1" type="submit" value="Back" />
        </Link>
        <div className="child">
          <h2 className="chart"> Description Ratio</h2>
          <Pie
            data={this.state.Data}
            options={{ maintainAspectRatio: false }}
          />
        </div>

        <div className="child">
          <h2 className="chart"> Playing Status Ratio</h2>
          <Pie
            data={this.state.Data1}
            options={{ maintainAspectRatio: false, animationEnabled: true }}
          />
        </div>
      </div>
    );
  }
}

export default Statistics;
