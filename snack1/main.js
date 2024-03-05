const carsModelList = [
    {
        marca: 'Volkswagen',
        nome: 'Polo',
        alimentazione: 'benzina',
    },
    {
        marca: 'Volkswagen',
        nome: 'Touran',
        alimentazione: 'diesel',
    },
    {
        marca: 'Fiat',
        nome: 'Panda',
        alimentazione: 'gpl',
    },
    {
        marca: 'Tesla',
        nome: 'Model 3',
        alimentazione: 'elettrica',
    },
    {
        marca: 'Volvo',
        nome: 'XC90',
        alimentazione: 'diesel',
    },
    {
        marca: 'Mercedes',
        nome: 'Classe A',
        alimentazione: 'benzina',
    },
    {
        marca: 'Audi',
        nome: 'A6',
        alimentazione: 'elettrica',
    },
    {
        marca: 'Seat',
        nome: 'Mii',
        alimentazione: 'metano',
    },
    {
        marca: 'Nissan',
        nome: 'Gtr',
        alimentazione: 'benzina',
    },
    {
        marca: 'Opel',
        nome: 'Corsa',
        alimentazione: 'gpl',
    },
];

const benzina = carsModelList.filter(cars => cars.alimentazione === 'benzina');
console.log(benzina);

const diesel = carsModelList.filter(cars => cars.alimentazione === 'diesel');
console.log(diesel);

const others = carsModelList.filter(cars => cars.alimentazione != 'benzina' && cars.alimentazione != 'diesel');
console.log(others);