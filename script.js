



// FETCH FUNCTIONS



fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then((data) => {console.log(data.Global)
        let infected = data.Global.TotalConfirmed;
        let recovered = data.Global.TotalRecovered;
        let deaths = data.Global.TotalDeaths;
        let newInfected = data.Global.NewConfirmed;
        let newRecovered = data.Global.NewRecovered;
        let newDeaths = data.Global.NewDeaths;

        document.getElementById('infected').textContent = infected.toLocaleString();
        document.getElementById('recovered').textContent = recovered.toLocaleString();
        document.getElementById('deaths').textContent = deaths.toLocaleString();
        document.getElementById('newInfected').textContent = newInfected.toLocaleString();
        document.getElementById('newRecovered').textContent = newRecovered.toLocaleString();
        document.getElementById('newDeaths').textContent = newDeaths.toLocaleString();
    }
    
    );




   




 