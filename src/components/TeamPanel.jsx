function TeamPanel({team}) {
  return (
    <ul>
      {team.map(name=> <li key={name}>{name}</li>)}
    </ul>
  )
}

export default TeamPanel
