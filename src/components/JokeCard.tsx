import { useEffect, useState } from 'react'
import { Loading } from '@/icons/Loading'
import { writtingEffect } from '@/utils'
import type { JokeData } from '@/lib/joke'

import '@/styles/joke-card.css'

export function JokeCard() {
  const [loading, setLoading] = useState(false)
  const [joke, setJoke] = useState('')

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    if (loading) {
      fetch('/api/joke.json?lang=en&type=single')
        .then((res) => res.json())
        .then((data: JokeData) => {
          addJoke(data.joke)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }
  }, [loading])

  const addJoke = async (jokeText: string) => {
    await writtingEffect(jokeText, (text) => setJoke(text))
    setLoading(false)
  }

  const generateJoke = async () => {
    setJoke('')
    setLoading(true)
    // await addJoke('lorem insup')
  }

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
