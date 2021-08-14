const catchRainbowWithFetch = () => {
  fetch('./rainbow-weather.jpeg')
    .then((response) => {
      return response.blob()
    })
    .then((blob) => {
      const urlFromBlob = URL.createObjectURL(blob)
      const image = document.getElementById('rainbow2') 
      image.src = urlFromBlob;
    })
    .catch((error) => {
      console.error(error)
    })
}

const catchRainbowWithAsyncAwait = async () => {
  const response = await fetch('./rainbow-weather.jpeg')
  const blob = await response.blob()
  const urlFromBlob = URL.createObjectURL(blob)
  const image = document.getElementById('rainbow2') 
  image.src = urlFromBlob
}

const getTextFromTxtWithFetch = () => {
  const paragraph = document.getElementById('paragraphTxt1') 
  fetch('./text.txt')
    .then((response) => {
      return response.text()
    })
    .then(text => {
      paragraph.innerHTML = text
    })
}

const getTextFromTxtWithAsyncAwait = async () => {
  const paragraph = document.getElementById('paragraphTxt2') 
  const response = await fetch('./text.txt')
  const text = await response.text()
  paragraph.innerHTML = text
}

getTextFromTxtWithAsyncAwait()
getTextFromTxtWithFetch()
catchRainbowWithAsyncAwait()
catchRainbowWithFetch()
