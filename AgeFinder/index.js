function check (){
    let date = new Date(dob.value)
    let currentDate = new Date()
    let age = currentDate.getFullYear() - date.getFullYear()
    let years = currentDate - date
    let months = Math.round(years / 1000 / 60 / 60 / 24 / 30)
    let days = Math.round(years / 1000 / 60 / 60 / 24)
    let hours = Math.round(years / 1000 / 60 / 60)
    let minutes = Math.round(years / 1000 / 60)
    let seconds = Math.round(years / 1000)
    document.getElementById('years').innerText = age
    document.getElementById('months').innerText = months
    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hours
    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds
}
function count(){
    let date = new Date(eventDate.value)
    let remaining = date - new Date()
    let remainingDays = Math.round(remaining / 1000 / 60 / 60 / 24)
    document.getElementById('remaining').innerText = remainingDays
}