import { Loading } from '@/icons/Loading'
import '@/styles/joke-card.css'
import { useEffect, useState } from 'react'

export function JokeCard() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)
  const jokeText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'

  const addJoke = async (newJoke: string): Promise<void> => {
    return new Promise<void>((resolve) => {
      // retornamos una promesa para poder usar .then o await
      let currentText = ''
      let index = 0

      setTimeout(function add() {
        if (index < newJoke.length) {
          currentText = currentText + newJoke[index] // una letra del chiste a currentText
          setJoke(currentText)
          index++

          // luego de incrementar el index ejecutamos la funcion add de manera recursiva
          // de esa manera se volvera a ejecutar la porsion de codigo pero con el index que sigue
          setTimeout(add, 10)
        } else {
          // cuando el index llegue al final resolvemos la promesa
          resolve()
        }
      }, 10)
    })
  }

  const generateJoke = async () => {
    if (!loading) {
      setLoading(true)
      addJoke(jokeText).then(() => {
        setLoading(false)
      })
    }
  }

  useEffect(() => {
    addJoke(jokeText)
  }, [])

  return (
    <div className="joke-card">
      <p className="joke-text"> {joke} </p>
      <button onClick={generateJoke} className="joke-button">
        {!loading ? <span> Generate </span> : <Loading />}
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
