export const writtingEffect = async (newJoke: string, cb: (text: string) => void): Promise<string | void> => {
  return new Promise<string | void>((resolve) => {
    // retornamos una promesa para poder usar .then o await
    let currentText = ''
    let index = 0

    setTimeout(function add() {
      if (index < newJoke.length) {
        currentText += newJoke[index] // una letra del chiste a currentText
        cb(currentText)
        index++
        // luego de incrementar el index ejecutamos la funcion add de manera recursiva
        // de esa manera se volvera a ejecutar la porsion de codigo pero con el index que sigue
        setTimeout(add, 10)
      } else {
        // cuando el index llegue al final resolvemos la promesa
        resolve()
      }
    }, 5)
  })
}
