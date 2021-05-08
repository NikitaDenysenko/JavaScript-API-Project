const catchRainbowWithAsyncAwait = async () => {
  const response: Response = await fetch('./rainbow-weather.jpeg')
  const blob = await response.blob()
  const urlFromBlob: string = URL.createObjectURL(blob)
  document.getElementById('rainbow1').setAttribute('src', urlFromBlob)
}

const catchRainbowWithFetch = (): void => {
  fetch('./rainbow-weather.jpeg')
    .then((response: Response) => {
      return response.blob()
    })
    .then((blob: Blob) => {
      const urlFromBlob: string = URL.createObjectURL(blob)
      document.getElementById('rainbow2').setAttribute('src', urlFromBlob)
    })
    .catch((error: Error) => {
      console.error(error)
    })
}

const getTextFromTxtWithAsyncAwait = async () => {
  const response: Response = await fetch('./text.txt')
  const text: string = await response.text()
  document.getElementById('paragraphTxt2').innerHTML = text
}

const getTextFromTxtWithFetch = (): void => {
  fetch('./text.txt')
    .then((response: Response) => {
      return response.text()
    })
    .then(text => {
      document.getElementById('paragraphTxt1').innerHTML = text
    })
}

getTextFromTxtWithAsyncAwait()
getTextFromTxtWithFetch()
catchRainbowWithAsyncAwait()
catchRainbowWithFetch()
