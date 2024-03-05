// Crea un array di oggetti che rappresentano delle persone.

// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// Confermate lettura come al solito e buon divertimento 


const people = [
    {
        nome: 'Simone',
        cognome: 'Nolberto',
        età: 25,
    },
    {
        nome: 'Tommaso',
        cognome: 'Nolberto',
        età: 17,
    },
    {
        nome: 'Luca',
        cognome: 'Marrella',
        età: 25,
    },
    {
        nome: 'Joy',
        cognome: 'Abela',
        età: 16,
    },
    {
        nome: 'Razvan',
        cognome: 'Ploscariu',
        età: 25,
    },
    {
        nome: 'Arianna',
        cognome: 'Comandini',
        età: 15,
    },
    {
        nome: 'Deborah',
        cognome: 'Frittelli',
        età: 34,
    },
    {
        nome: 'Livia',
        cognome: 'Laurenti',
        età: 41,
    },

];

const driver = [];
const abletToDrive = people.filter((member) => {

    let peopleName = member.nome;
    let peopleSecondName = member.cognome;
    let peopleAge = member.età;

    if (peopleAge > 18) {
        driver.push(`${peopleName} ${peopleSecondName}, puoi guidare!`)
        // console.log(`${peopleName} ${peopleSecondName}, puoi guidare!`);

    } else {
        driver.push(`Spiacente ${peopleName} ${peopleSecondName}, devi avere almeno 18 anni`)
        // console.log(`Spiacente ${peopleName} ${peopleSecondName}, devi avere almeno 18 anni`);
    }

} );

console.log(driver);