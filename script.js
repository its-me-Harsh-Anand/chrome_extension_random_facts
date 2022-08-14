fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
    headers: {
        'X-Api-Key': 'Your API key for API Ninjas'
      },
})
    .then(res => res.json())
    .then(data => {
        const fact = data[0]?.fact
        const para = document.querySelector('p')
        para.innerHTML = fact || "Retry..."
        wow();
    })
    .catch(err => {
        console.log(err)
    })

function wow() {
    var snd = new Audio('./sound.mp3')
    snd.play();
}