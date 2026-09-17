import { useState } from 'react'
import './App.css'
import ResultsList from './components/ResultsList'
import TeamPanel from './components/TeamPanel'
import SearchBar from './components/SearchBar'

const fakeResults = ["Pikachu", "Charmander", "Bulbasaur"]
const fakeTeam = ["Charizard", "Gengar", "Snorlax"]

function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState(fakeResults)

  async function handleSearch(query) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
  if (response.ok === true) {
    const data = await response.json()
    setResults([data.name])
  } else {
    setResults([])
  }
}

  return (
    <>
      <section id="center">

        <SearchBar onSearch={handleSearch} />

        <div>
          <h1>Pokemon Builder!</h1>

          <ResultsList results={results} />

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
        <TeamPanel team={fakeTeam} />
      </div>

      <div className="ticks"></div>



      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
