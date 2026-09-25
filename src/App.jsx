import { useState, useEffect } from 'react'
import './App.css'
import ResultsList from './components/ResultsList'
import TeamPanel from './components/TeamPanel'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([])
  const [team, setTeam] = useState(() => {
    const saved = localStorage.getItem('team')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team))
  },[team])

  async function handleSearch(query) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
  if (response.ok === true) {
    const data = await response.json()
    setResults([data])
  } else {
    setResults([])
  }
}
  function handleAddToTeam(pokemon) {
    const alreadyOnTeam = team.some(member => member.id === pokemon.id)
    if (team.length < 6 && !alreadyOnTeam) {
      setTeam([...team, pokemon])
    }
  }
  function handleRemoveFromTeam(pokemonId) {
    setTeam(team.filter(member => member.id !== pokemonId))
  }
  return (
    <>
      <section id="center">

        <SearchBar onSearch={handleSearch} />

        <div>
          <h1>Pokemon Builder!</h1>

          <ResultsList results={results} onAddToTeam={handleAddToTeam} />

        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <div>
        <TeamPanel team={team} onRemoveFromTeam={handleRemoveFromTeam}/>
      </div>

      <div className="ticks"></div>



      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
