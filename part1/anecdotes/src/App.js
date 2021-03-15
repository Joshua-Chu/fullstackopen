
import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

 
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const [mostVoted, setMostVoted] = useState({anecdote : anecdotes[selected], vote: votes[selected]})




  const nextSelection = ()=>{
   setSelected( Math.floor(Math.random() * anecdotes.length)) 
   handleBest()
  }

  
  const handleBest = ()=>{
    
    let copy = {...mostVoted}
    const bestInd = votes.indexOf(Math.max(...votes))
    copy = {anecdote: anecdotes[bestInd], vote: votes[bestInd]}
    setMostVoted(copy)
  }

  const handleVote = ()=>{
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

  }




  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={nextSelection}>Next Anecdote</button>

      <div>
        <h1>Anecdote with the most Votes</h1>
        <p>{mostVoted.anecdote}</p>
        <p>votes: {mostVoted.vote}</p>
      </div>
    </div>
  )
}

export default App
