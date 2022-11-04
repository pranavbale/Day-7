let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data);

    // finding a countries whose continent is asia
    let asiaCountries = data.filter(asiaCount);

    function asiaCount(data) {
        if (data.continents[0] === 'Asia') {
            return data;
        }
    }
    console.log(asiaCountries);


    // finding the countries whose population is lessthan 2 lakh 
    let populationCountries = data.filter(population);

    function population(data) {
        if (data.population < 200000) {
            return data;
        }
    }
    console.log(populationCountries);


    // displaying the information 
    let displayInformation = function(data) {
            for (let i = 0; i < data.length; i++) {
                console.log(`
Name : ${data[i].name.common}
Capital : ${data[i].capital[0]}
Flag : ${data[i].flags.png}
        `);
            }
        }
        // displayInformation(data);

    // display total population 
    let totalPopulation = data.reduce((sum, i) => {
        return (sum + i.population);
    }, 0);
    console.log(totalPopulation);


}