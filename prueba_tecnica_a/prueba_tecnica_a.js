//importamos las librerías
const { Axios, default: axios } = require("axios");
const cheerio = require('cheerio');

//creamos una variable con la url de la página 
const url = 'https://douglas.es/c/perfumes';

//función para hacer el web scraping
const extractNames = async () => {

    //creamos una varibles para guardar todo el html
    const htmlContent = await axios.get(url);

    //cargamos todo el html obtenido anteriormente
    const $ = cheerio.load(htmlContent.data);
    //array para guardar los resultados del scrap
    const productNames = [];

    //filtro para buscar por la clase asignada al nombre de los perfumes
    $('.rd__bb-productinfo__name').map((_, el) => {
        //creamos una variable donde vamos a guardar los resultados
        const productName = $(el).text()
        //introducimos en el array los nombres
        productNames.push(productName)
    });

    //devolvemos el array
    return productNames;
}

//llamamos a la función y mostramos el array por consola
extractNames().then((productNames) => console.log(productNames));