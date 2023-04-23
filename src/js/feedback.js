import React, { useEffect, useState } from 'react';
import { CountDown } from './timer';
import ReactApexChart from 'react-apexcharts';
import { AnswerButtonsContainer } from './buttons';
import $ from 'jquery';
import '../css/Feedback.css';

export function Feedback({ gameInProgress, setGameInProgress }) {
  const [currentScore, setCurrentScore] = React.useState([]);
  const [previousScores, setPreviousScores] = React.useState([]);

  const fetchPreviousScores = () => {
    let storedScores = localStorage.getItem('scores'); // Get the existing saved scores
    console.log(
      `ℹ️ ℹ️ ℹ️ Previous scores fetched. Storing this in Feedback state: ${storedScores}`
    );
    setPreviousScores(storedScores);
  };

  const updatePreviousScores = (
    currentScore,
    previousScores,
    setPreviousScores
  ) => {
    console.log('📜 📜 📜 Updating the previous scores 📜 📜 📜');
    const newPreviousScores = previousScores.push(currentScore);
    setPreviousScores(newPreviousScores); // Add current score to previous
    localStorage.setItem('scores', newPreviousScores); // Save that to local storage
    console.log(
      `📜 📜 📜 Previous scores updated to: ${JSON.stringify(
        newPreviousScores
      )}`
    );
  };

  const switchGameInProgressState = () => {
    console.log('switching game progress state');
    setGameInProgress((current) => !current);
  };

  const startOfRound = () => {
    fetchPreviousScores();
    console.log('⭐⭐⭐⭐⭐ START OF ROUND ⭐⭐⭐⭐⭐');
    console.log(currentScore);
    console.log(previousScores);
    switchGameInProgressState();
  };

  const endOfRound = () => {
    switchGameInProgressState();
    console.log('✨✨✨ END OF ROUND ✨✨✨');
    console.log(currentScore);
    console.log(previousScores);
    updatePreviousScores(currentScore, previousScores, setPreviousScores);
    $('#previousScores').text(previousScores);
  };

  console.log(
    `Feedback re-rendered, game progress value is currently ${gameInProgress}`
  );

  return (
    <div id="feedbackDiv">
      <span id="feedbackText" className="noActiveScore">
        Go!
      </span>
      <br />
      <div id="scoreAndTimer">
        <CurrentScore currentScore={currentScore} />
        <CountDown id="countdownDiv" endOfRound={endOfRound} />
        <div>
          {gameInProgress ? (
            <AnswerButtonsContainer />
          ) : (
            <ScoreResults previousScores={previousScores} />
          )}
        </div>
      </div>
    </div>
  );
}

export function CurrentScore(currentScore) {
  const scoreToDisplay =
    currentScore.currentScore.length > 0
      ? JSON.stringify(currentScore.currentScore)
      : 0;
  console.log(`score to display: ${scoreToDisplay}`);
  return (
    <div>
      <p>
        Score:{' '}
        <span id="displayScore">{scoreToDisplay > 0 ? scoreToDisplay : 0}</span>
      </p>
    </div>
  );
}

export function ScoreResults(previousScores) {
  console.log('Displaying score results compo');
  // useEffect(() => {}, [previousScores]);
  return (
    <div id="resultsContainer">
      <h4>Previous scores:</h4>
      <ApexChart previousScores={previousScores} />
    </div>
  );
}

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    // let storedScores = [6, 1, 2, 2, 1, 0, 3, 5, 7, 10]; // For testing
    let storedScores = [];
    try {
      if (props.previousScores.previousScores.length > 0) {
        storedScores = JSON.parse(props.previousScores.previousScores);
      } else {
        storedScores = [0];
      }
    } catch (err) {
      console.log(`Chart error: ${err}`);
    }
    console.log(
      'storedScores, which is type ' +
        typeof storedScores +
        ' : ' +
        storedScores
    );
    let numberOfScores = storedScores.length;
    // let numberOfScores = this.props.scores.length;
    let highestScore = Math.max.apply(Math, storedScores);
    console.log('📈 📈 📈 CHART: ');
    console.log(storedScores);
    console.log('highest score is ' + highestScore);

    this.state = {
      series: [
        {
          name: 'Scores',
          data: storedScores,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        // forecastDataPoints: {
        //   count: 7,
        // },
        stroke: {
          width: 7,
          curve: 'smooth',
        },

        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
          enabledOnSeries: false,
        },
        xaxis: {
          // type: "numeric",
          tickAmount: numberOfScores.length,
          // range: XAXISRANGE,
          min: 1,
          max: numberOfScores.length,
          labels: {
            formatter: function (numberOfScores) {
              return '';
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
          text: 'Previous scores',
          align: 'left',
          style: {
            fontSize: '16px',
            color: '#666',
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
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
