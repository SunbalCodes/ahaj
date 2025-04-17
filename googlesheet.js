const scriptURL = 'https://script.google.com/macros/s/AKfycby8BPatOvCcypjrbveNjA0_bAQyr11zp1sURwijhCUF58HZftN80HNEcAuNsoowwdoejA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})