import { useState } from 'react'
import './App.css'
import ResultsList from './components/ResultsList'
import TeamPanel from './components/TeamPanel'
import SearchBar from './components/SearchBar'

const fakeResults = ["Pikachu", "Charmander", "Bulbasaur"]
const fakeTeam = ["Charizard", "Gengar", "Snorlax"]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">

        <SearchBar />

        <div>
          <h1>Pokemon Builder!</h1>

          <ResultsList results={fakeResults} />

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
