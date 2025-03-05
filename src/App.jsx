import { useState } from 'react'
import './App.css'

function App() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)

  function gameLogic(playerChoice) {
    clearButtonColours()

    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]
    let outcome
    // Tie
    if((playerChoice === cpuChoice)) {
      setTies(prevTies => prevTies + 1)
      document.getElementById(`${playerChoice.toLowerCase()}Button`).style.background='grey'
      outcome = 'Tie'
    }
    // Win
    else if(((playerChoice === choices[0]) && (cpuChoice === choices[2])) || 
    ((playerChoice === choices[1]) && (cpuChoice === choices[0])) || 
    ((playerChoice === choices[2]) && (cpuChoice === choices[1]))) {
      setWins(prevWins => prevWins + 1)
      document.getElementById(`${playerChoice.toLowerCase()}Button`).style.background='green'
      outcome = 'Win'
    }
    // Lose
    else {
      setLosses(prevLosses => prevLosses + 1)
      document.getElementById(`${playerChoice.toLowerCase()}Button`).style.background='red'
      outcome = 'Lose'
    }
    console.log(`outcome: ${outcome}    playerChoice: ${playerChoice}    cpuChoice: ${cpuChoice}`)
  }

  function clearButtonColours() {
    choices.forEach(choice => {
      document.getElementById(`${choice.toLowerCase()}Button`).style.background=''        
    });
  }

  function resetGame() {
    clearButtonColours()
    setWins(0)
    setLosses(0)
    setTies(0)
  }

  return (
    <>
    <h1>Rock, Paper, Scissors</h1>
    <h2>
      Wins: {wins}<br/>
      Losses: {losses}<br/>
      Ties: {ties}
    </h2>
    <div className="card">
      {choices.map((choice, index) => (
        <button
          key={index}
          id={`${choice.toLowerCase()}Button`}
          onClick={() => gameLogic(choice)}>
            {choice}
        </button>
      ))}
    </div>
    <button className="resetButton" onClick={() => {resetGame()}}>Reset Game</button>
    </>
  )
}

export default App
