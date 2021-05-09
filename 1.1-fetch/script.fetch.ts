const catchRainbowWithFetch = (): void => {
  fetch('./rainbow-weather.jpeg')
    .then((response: Response) => {
      return response.blob()
    })
    .then((blob: Blob) => {
      const urlFromBlob: string = URL.createObjectURL(blob)
      const image = document.getElementById('rainbow2') as HTMLImageElement
      image.src = urlFromBlob;
    })
    .catch((error: Error) => {
      console.error(error)
    })
}

const catchRainbowWithAsyncAwait = async () => {
  const response: Response = await fetch('./rainbow-weather.jpeg')
  const blob = await response.blob()
  const urlFromBlob: string = URL.createObjectURL(blob)
  const image = document.getElementById('rainbow2') as HTMLImageElement
  image.src = urlFromBlob
}

const getTextFromTxtWithFetch = (): void => {
  const paragraph = document.getElementById('paragraphTxt1') as HTMLParagraphElement
  fetch('./text.txt')
    .then((response: Response) => {
      return response.text()
    })
    .then(text => {
      paragraph.innerHTML = text
    })
}

const getTextFromTxtWithAsyncAwait = async () => {
  const paragraph = document.getElementById('paragraphTxt2') as HTMLParagraphElement
  const response: Response = await fetch('./text.txt')
  const text: string = await response.text()
  paragraph.innerHTML = text
}

getTextFromTxtWithAsyncAwait()
getTextFromTxtWithFetch()
catchRainbowWithAsyncAwait()
catchRainbowWithFetch()
