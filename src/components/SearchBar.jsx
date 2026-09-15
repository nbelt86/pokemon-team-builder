import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
   onSearch(query)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Pokemon"
        value={query} onChange={e => setQuery(e.target.value)} />
      </form>
        <p> You're searching for: {query}</p>
    </>
  )
}

export default SearchBar
