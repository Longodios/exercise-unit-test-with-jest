// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function (valueInEuro) {
    //Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = (valueInDollars) => {

    let value = valueInDollars * oneEuroIs.JPY;
    return value;

    
}

const fromYenToPound = (valueInYens) => {

    let valueInEuros = valueInYens / oneEuroIs.JPY;
    let valueInPounds = valueInEuros * oneEuroIs.GBP;

    return valueInPounds;
}

module.exports = {sum,fromEuroToDollar,fromDollarToYen, fromYenToPound}