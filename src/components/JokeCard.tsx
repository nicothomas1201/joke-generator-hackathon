import { useEffect, useState } from 'react'
import { Loading } from '@/icons/Loading'
import { writtingEffect } from '@/utils'
import '@/styles/joke-card.css'

export function JokeCard() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)
  const jokeText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'

  const addJoke = async (jokeText: string) => {
    await writtingEffect(jokeText, (text) => setJoke(text))
    setLoading(false)
  }

  const generateJoke = async () => {
    setLoading(true)
    addJoke(jokeText)
  }

  useEffect(() => {
    addJoke(jokeText)
  }, [])

  return (
    <div className="joke-card">
      <p className="joke-text"> {joke} </p>
      <button disabled={loading} onClick={generateJoke} className={`joke-button ${!loading ? 'animate' : ''}`}>
        {loading ? <Loading /> : <span> Generate </span>}
      </button>
    </div>
  )
}

// const removeJoke = async (oldJoke: string): Promise<void> => {
//   return new Promise<void>((resolve) => {
//     let currentText = ''

//     let index = oldJoke.length - 1
//     setTimeout(function remove() {
//       if (index >= 0) {
//         currentText = oldJoke.slice(0, index)
//         setJoke(currentText)

//         index--
//         setTimeout(remove, 10)

//       } else {
//         resolve()
//       }
//     }, 10)
//   })
// }
