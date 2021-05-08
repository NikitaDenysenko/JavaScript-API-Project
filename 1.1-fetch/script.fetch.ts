const catchRainbowWithAsyncAwait = async () => {
  const response: Response = await fetch('./rainbow-weather.jpeg')
  const blob = await response.blob()
  const urlFromBlob: string = URL.createObjectURL(blob)
  document.getElementById('rainbow1').setAttribute('src', urlFromBlob)
}

const catchRainbowWithFetch = () => {
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

catchRainbowWithAsyncAwait()
catchRainbowWithFetch()
