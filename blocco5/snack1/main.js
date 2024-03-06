console.log('It works!');

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

// Calcola quanto pesano tutte le zucchine.

const zuchinis = [
    {
        nome: 'zucchina romanesca',
        peso: 90,
        lunghezza: 15, 
    }, 
    {
        nome: 'zucchina trombetta',
        peso: 60,
        lunghezza: 10, 
    }, 
    {
        nome: 'zucchina costata',
        peso: 110,
        lunghezza: 20, 
    }, 
    {
        nome: 'zucchina crookneck',
        peso: 50,
        lunghezza: 10, 
    }, 
    {
        nome: 'zucchina rampicante',
        peso: 130,
        lunghezza: 30, 
    }, 
    {
        nome: 'zucchina italiana',
        peso: 120,
        lunghezza: 18, 
    }, 
    {
        nome: 'zucchina gialla',
        peso: 125,
        lunghezza: 20, 
    }, 
    {
        nome: 'zucchina siciliana',
        peso: 90,
        lunghezza: 15, 
    }, 
    {
        nome: 'zucchina gorda',
        peso: 130,
        lunghezza: 21, 
    }, 
    {
        nome: 'zucchina bianca',
        peso: 112,
        lunghezza: 16, 
    }, 
];

console.log(zuchinis);

let sum = 0;

zuchinis.forEach((zuchini) => {
//    console.log(zuchini.lunghezza);
   sum += zuchini.lunghezza;
   
   return sum;

})

console.log(sum);
