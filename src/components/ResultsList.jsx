function ResultsList({results, onAddToTeam}) {
  return (
    <ul>
  {results.map(pokemon => (
    <li key={pokemon.id}>
      <button onClick={() => onAddToTeam(pokemon)}>
        Add to team </button>
      {pokemon.name}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {pokemon.types.map(type => <span key={type.type.name}>{type.type.name}</span>)}
    </li>
  ))}
</ul>
  )
}

export default ResultsList
