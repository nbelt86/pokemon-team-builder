function ResultsList({results}) {
  return (
    <ul>
      {results.map(name=> <li key={name}>{name}</li>)}
    </ul>
  )
}

export default ResultsList
