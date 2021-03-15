import { useState } from "react"

const Button = (props) =>{
  const {handleClick, text} = props

  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Stats = (props) =>{
  const {stat, text} = props

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{stat}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

//Components
const Buttons = (props)=>{

  const {handleGood,handleNeutral,handleBad} = props.handleClicks

  return(
    <div>
      <Button handleClick={handleGood} text="Good"/>
      <Button handleClick={handleNeutral} text="Neutral"/>
      <Button handleClick={handleBad} text="Bad"/>
    
    </div>
  )
}

const Statistics = (props)=>{
  const {good, neutral, bad, totalFeedBacks} = props.stat
  
  if(totalFeedBacks === 0){
    return(
      <div>
        <p>No Feedback Given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <Stats stat={good} text="good"/>
      <Stats stat={neutral} text="neutral"/>
      <Stats stat={bad} text="bad"/>
      <Stats stat={totalFeedBacks} text="all"/>
      <Stats stat={(good - bad) / totalFeedBacks} text="average"/>
      <Stats stat={(good / totalFeedBacks) * 100 + ' %'} text="positive"/>
    </div>
  )
}

const App = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedBacks, setTotalFeedBacks] = useState(0)

  const handleGood = ()=>{
    setTotalFeedBacks(totalFeedBacks + 1)
    setGood(good + 1)
  }
  const handleNeutral = ()=>{
    setTotalFeedBacks(totalFeedBacks + 1)
    setNeutral(neutral + 1)
  }
  const handleBad = ()=>{
    setTotalFeedBacks(totalFeedBacks + 1)   
    setBad(bad + 1)
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      <Buttons handleClicks={{handleGood, handleNeutral,handleBad}}/>
      
      <Statistics stat={{good,neutral,bad,totalFeedBacks}}/>
     


 

    </div>
  )
}




export default App