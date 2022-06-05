// const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json'
// const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json`
const url = './data.json'

const fetchForecast = async () => {
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}
export { fetchForecast }
