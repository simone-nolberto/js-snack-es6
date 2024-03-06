console.log('it workss!');

// Crea 10 oggetti che rappresentano una zucchina.

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

let short = zuchinis.filter((zuchini) => {
    if (zuchini.lunghezza < 15) {
        return true;
    }
    return false;
})
console.log(short);

let shortWeight = 0;
short.forEach(element => {
    shortWeight += element.peso
})
console.log(`${shortWeight}g`);


let long = zuchinis.filter(zuchini => (zuchini.lunghezza >= 15))
console.log(long);

// così vediamo entrambi i modi per creare due array tramite filter

let longWeight = 0;
long.forEach(element => {
    longWeight += element.peso
})
console.log(`${longWeight}g`);


