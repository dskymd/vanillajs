import { fetchForecast } from './ajax.js'
import { shuffleArray } from './utl.js'

// const output = document.querySelector('#output')
const table = document.querySelector('#table')

const updateMembers = (members) => {
  const tbody = document.createElement('tbody')

  const fragment = document.createDocumentFragment()
  for (const m of members) {
    const tr = document.createElement('tr')
    const tdId = document.createElement('td')
    tdId.innerText = m.id

    const tdName = document.createElement('td')
    tdName.innerText = m.name

    const tdAge = document.createElement('td')
    tdAge.innerText = m.age

    const tdPic = document.createElement('td')
    tdPic.innerHTML = `<img src="${m.picture}" />`

    tr.append(tdId, tdName, tdAge, tdPic)
    tbody.append(tr)
    fragment.append(tbody)
  }

  const oldTbody = table.querySelector('tbody')
  if (oldTbody) oldTbody.remove()

  table.append(fragment)
}

// init
const members = await fetchForecast()
updateMembers(members)
