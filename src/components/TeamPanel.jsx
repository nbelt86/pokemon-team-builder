function TeamPanel({team}) {
  return (
    <ul>
      {team.map(pokemon=> <li key={pokemon.id}>{pokemon.name}</li>)}
    </ul>
  )
}

export default TeamPanel
