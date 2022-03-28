import React from "react";
import { CountDown } from "./timer";
import ReactApexChart from "react-apexcharts";

export class Feedback extends React.Component {
  render() {
    return (
      <div id="feedbackDiv">
        <span id="feedbackText" className="noActiveScore"></span>
        <br />
        <div id="scoreAndTimer">
          <CurrentScore />
          <CountDown id="countdownDiv" />
        </div>
      </div>
    );
  }
}

class CurrentScore extends React.Component {
  render() {
    return (
      <div>
        <p>
          Score: <span id="displayScore">{this.props.score}</span>
        </p>
      </div>
    );
  }
}

CurrentScore.defaultProps = {
  score: "0",
};

export class ScoreResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="resultsContainer">
        <h4>
          Previous scores: <span id="previousScores"></span>
        </h4>
        <ApexChart />
      </div>
    );
  }
}

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    let storedScores = JSON.parse(localStorage.scores);
    // let storedScores = [6, 1, 2, 2, 1, 0, 3, 5, 7, 10]; // For testing
    console.log(
      "storedScores, which is type " +
        typeof storedScores +
        " : " +
        storedScores
    );
    let numberOfScores = storedScores.length;
    // let numberOfScores = this.props.scores.length;
    let highestScore = Math.max.apply(Math, storedScores);
    console.log(storedScores);
    console.log("highest score is " + highestScore);

    this.state = {
      series: [
        {
          name: "Scores",
          data: storedScores,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
        },
        // forecastDataPoints: {
        //   count: 7,
        // },
        stroke: {
          width: 5,
          curve: "smooth",
        },

        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
          enabledOnSeries: false,
        },
        xaxis: {
          type: "numeric",
          tickAmount: numberOfScores + 1,
          // range: XAXISRANGE,
          labels: {
            formatter: function (numberOfScores) {
              return "";
            },
          },
        },
        yaxis: {
          min: 0,
          max: highestScore + 1,
          tickAmount: highestScore + 1,
        },
        // xaxis: {
        //   type: "numeric",
        // categories: [
        //   "1/11/2000",
        //   "2/11/2000",
        //   "3/11/2000",
        //   "4/11/2000",
        //   "5/11/2000",
        //   "6/11/2000",
        //   "7/11/2000",
        //   "8/11/2000",
        //   "9/11/2000",
        //   "10/11/2000",
        //   "11/11/2000",
        //   "12/11/2000",
        //   "1/11/2001",
        //   "2/11/2001",
        //   "3/11/2001",
        //   "4/11/2001",
        //   "5/11/2001",
        //   "6/11/2001",
        // ],
        // tickAmount: numberOfScores,
        // labels: {
        //   formatter: function (value, timestamp, opts) {
        //     return opts.dateFormatter(new Date(timestamp), "dd MMM");
        //   },
        // },
        // },
        title: {
          text: "Previous scores",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
      },
    };
  }


  render() {
    // console.log(this.props)
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}
