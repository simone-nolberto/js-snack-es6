console.log('it works');

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikes = [
    {
        name: 'Cube 120',
        weight: 13,
    },
    {
        name: 'Trek Powerfly 5',
        weight: 20,
    },
    {
        name: 'Scott',
        weight: 10,
    },
    {
        name: 'Canyon',
        weight: 18,
    },
    {
        name: 'Graziella',
        weight: 8,
    },
    {
        name: 'Cannondale',
        weight: 12,
    },
];

console.log(bikes);

// Stampare in console la bici con peso minore utilizzando destructuring e template literal

bikes.forEach(bike => {

    const { name, weight } = bike;
    // console.log(name, weight);
    const min = Math.min(...bikes.map(bike => bike.weight))
    console.log(min)

});



