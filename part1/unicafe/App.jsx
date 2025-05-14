import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'give feedback'

  const Header = (props) => <h1>{props.title}</h1>
  const Buttons = ({ good, neutral, bad }) => {
    return (
      <>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </>
    );
  }
  const StatisticLine = ({text, value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  const calcAverage = (good, neutral, bad )=>{
    return (good - bad) / (good + neutral + bad);
  }
  const calcPositive = (good, neutral, bad )=>{
    return 100*good / (good + neutral + bad);
  }
  const Stats = ({ good, neutral, bad }) => {
    if ((good +neutral+bad) == 0) return <p>No feedback given</p>;
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="all" value={good + neutral + bad} />
            <StatisticLine text="average" value={calcAverage(good, neutral, bad)} />
            <StatisticLine text="positive" value={calcPositive(good, neutral, bad) + ' %'} />
          </tbody>
        </table>
      </>
    );
  }
  return (
    <div>
      <Header title={title} />
      <Buttons good={good} neutral={neutral} bad={bad} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
