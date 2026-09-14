import { useState } from 'react'

function SearchBar() {
  const [query, setQuery] = useState("")
  return (
    <>
      <input type="text" placeholder="Search Pokemon"
      value={query} onChange={e => setQuery(e.target.value)} />
      <p> You're searching for: {query}</p>
      </>
  )
}

export default SearchBar
