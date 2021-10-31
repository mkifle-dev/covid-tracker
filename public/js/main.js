document.querySelector('.datePicker').valueAsDate = new Date()

fetch('/covidSymptoms')
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      document.querySelector('.hideTable').style.display = 'block'
      document.querySelector('#tableWrapper').style.display = 'block'
      let symptomTable = document.querySelector('.symptom')
      data.forEach( (day) => {
        let tBody = document.querySelector('.tBody')

          let newRow = document.createElement('tr')
          let date = document.createElement('td')
          let symptom = document.createElement('td')
          let message = document.createElement('td')
          date.innerText = day[2]
          symptom.innerText = day[0]
          message.innerText = day[1]

          newRow.appendChild(date)
          newRow.appendChild(symptom)
          newRow.appendChild(message)
          tBody.appendChild(newRow)

      });
    }
    else{
      document.querySelector('.hideTable').style.display = 'none'
      document.querySelector('#tableWrapper').style.display = 'none'
    }

  })
  .catch(err => {
    console.log(`error ${err}`)
  })
