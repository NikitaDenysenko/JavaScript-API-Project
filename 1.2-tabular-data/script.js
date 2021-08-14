const getData = async () => {
  const response = await fetch('data.csv')
  const data = await response.text()
  const rows = data.split(/\n/).slice(1)
}
getData()
