function TeamPanel({team, onRemoveFromTeam}) {
  return (
    <ul>
      {team.map(pokemon => (
        <li key={pokemon.id}>
          {pokemon.name}
          <button onClick={() => onRemoveFromTeam(pokemon.id)}>
            Remove
          </button>
          </li>
        ))}
    </ul>
  )
}

export default TeamPanel
