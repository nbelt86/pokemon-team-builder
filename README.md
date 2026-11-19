# Pokemon Team Builder

A small React app for searching Pokémon and building a team of up to six — built while learning React state, effects, and working with a public API.

## Features

- **Search** — looks up a Pokémon by name via [PokeAPI](https://pokeapi.co)
- **Results** — shows the Pokémon's sprite and types, with a button to add it to your team
- **Team** — holds up to 6 Pokémon, each removable individually; duplicates are blocked
- **Persistence** — your team is saved to `localStorage`, so it survives a page refresh

## Stack

- React 19 + Vite, no backend — all data comes live from PokeAPI
- Team state persisted client-side via `localStorage`

## Setup

```bash
npm install
npm run dev
```

Then visit the local URL Vite prints (typically `http://localhost:5173`).

## Linting

```bash
npm run lint
```
