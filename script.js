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
        change_color(para);
        wow();
    })
    .catch(err => {
        console.log(err)
    })

function wow() {
    var snd = new Audio('./sound.mp3')
    snd.play();
}

function change_color(paraNode) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (randomColor.length < 6) {
        randomColor = "0" + randomColor;
    }

    checkColors("ffffff", randomColor);
    var whiteForegoundContrast = parseFloat(colorData['contrast']);
    checkColors("000000", randomColor);
    var blackForegoundContrast = parseFloat(colorData['contrast']);

    // console.log(whiteForegoundContrast + " " + blackForegoundContrast);

    if (whiteForegoundContrast < blackForegoundContrast) {
        paraNode.style.color = "#000000";
    }
    else {
        paraNode.style.color = "#ffffff";
    }

    document.querySelector('body').style.backgroundColor = "#"+randomColor;    ;
}
