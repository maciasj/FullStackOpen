import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  const [selected, setSelected] = useState(0)

  const Randomizer = () => {
    return (
      <>
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
          next anecdote
        </button>
      </>
    )
  }
  const Vote = () => {
    const handleVote = () => {
      const newVotes = [...votes]
      newVotes[selected] += 1
      setVotes(newVotes)
    }
    return (
      <>
        <button onClick={handleVote}>
          vote
        </button>
      </>
    )
  }
  const Display = ({anecdote,votes}) =>{
    return(
    <>
      <p>{anecdote}</p>
      <p> has {votes} votes</p>
    </>)
  }
  const findMax = () =>{
    let max = 0;
    for(let i = 1; i<votes.length; i++){
      if(votes[max]<votes[i]) max = i;
    }
    return max;
  }

 
  return (
    <div>
      <Display anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Vote/><Randomizer/>
      <h2>Anecdote with most votes</h2>
      <Display anecdote={anecdotes[findMax()]} votes={votes[findMax()]}/>
    </div>
  )
}

export default App