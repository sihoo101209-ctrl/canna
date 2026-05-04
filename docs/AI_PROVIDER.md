# AI Provider Plan

Canna Studio currently uses local rules to simulate vibe coding.

The future AI layer should be small and replaceable:

```js
async function generateGameDraft({ prompt, genre, project }) {
  return {
    summary: "",
    data: {},
    todo: [],
    warnings: [],
  };
}
```

## Principles

- Keep project data editable after generation.
- Never hide generated JSON from the user.
- Ask for missing design choices instead of inventing too much.
- Keep generation scoped to the selected 2D genre.
- Let the user remix one seed into multiple genres.

## Planned Commands

- Make a new game
- Improve this scene
- Add 20 items
- Make this easier
- Make this scarier
- Convert to roguelike
- Find missing systems
- Make a 1-hour MVP
- Export playable HTML
