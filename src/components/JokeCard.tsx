import '@/styles/joke-card.css'
import { useState } from 'react'

export function JokeCard() {
  const [joke] = useState<string>(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  )

  return (
    <div className="joke-card">
      <p className="joke-text">{joke}</p>
      <button className="joke-button">Generate</button>
    </div>
  )
}
