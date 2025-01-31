import { useState } from 'react'
import './App.css'

function App() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)

  function gameLogic(playerChoice, buttonId) {
    clearButtonColours()

    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(`playerChoice: ${playerChoice}    cpuChoice: ${cpuChoice}`)
    
    // Tie
    if((playerChoice === cpuChoice)) {
      setTies(prevTies => prevTies + 1)
      document.getElementById(buttonId).style.background='grey'
      return
    }
    
    // Win
    if(((playerChoice === choices[0]) && (cpuChoice === choices[2])) || 
    ((playerChoice === choices[1]) && (cpuChoice === choices[0])) || 
    ((playerChoice === choices[2]) && (cpuChoice === choices[1]))) {
      setWins(prevWins => prevWins + 1)
      document.getElementById(buttonId).style.background='green'
      return
    }

    // Lose
    setLosses(prevLosses => prevLosses + 1)
    document.getElementById(buttonId).style.background='red'
  }

  function clearButtonColours() {
    choices.forEach(choice => {
      document.getElementById(`${choice.toLowerCase()}Button`).style.background=''        
    });
  }

  return (
    <>
      <div>
      </div>
      <h1>Rock, Paper, Scissors</h1>
      <h1>
        Wins: {wins}<br/>
        Losses: {losses}<br/>
        Ties: {ties}
      </h1>
      <div className="card">
        {choices.map((choice, index) => (
          <button
            key={index}
            id={`${choice.toLowerCase()}Button`}
            onClick={(e) => gameLogic(choice, e.target.id)}>
              {choice}
              </button>
        ))}
      </div>
    </>
  )
}

export default App
