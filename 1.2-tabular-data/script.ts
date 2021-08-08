const getData = async ():Promise<void> => {
  const response: Response = await fetch('data.csv')
  const data: string = await response.text()
  const rows: string[] = data.split(/\n/).slice(1)
}
getData()
