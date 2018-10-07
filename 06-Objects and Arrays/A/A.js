var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

console.log("1. Mumbai’s population is " + asia.countries.India.Mumbai.population + " Million");
console.log("2. Beijing’s population is " + asia.countries.China.Beijing.population + " Million");
console.log("3. Hong Kong’s population is " + asia.countries.China["Hong Kong"].population + " Million");