console.log('it works!');

// Creare un array di oggetti di squadre di calcio.

// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// *BONUS*
// Stampare in pagina oltre che in console!

const footballTeams = [
    {
        nome: 'Chelsea',
        punti: Math.floor(Math.random() * 100) + 1,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'Juve',
        punti: Math.floor(Math.random() * 100) + 1,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'Lazio',
        punti: Math.floor(Math.random() * 100) + 1,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'Milan',
        punti: Math.floor(Math.random() * 100) + 1,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'Inter',
        punti: Math.floor(Math.random() * 100) + 10,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'Roma',
        punti: Math.floor(Math.random() * 100) + 1,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'ManCity',
        punti: Math.floor(Math.random() * 100) + 17,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    },
    {
        nome: 'Liverpool',
        punti: Math.floor(Math.random() * 100) + 10,
        falli_subiti: Math.floor(Math.random() * 100) + 1,
    }

];

console.log(footballTeams);

const box = document.querySelector('.container');


footballTeams.forEach(team => {

    const { nome, falli_subiti } = team;
    console.log(nome, falli_subiti);
    let markup = `<div class="card">
    <h1>${nome}</h1>
    <p> Falli subiti: ${falli_subiti}</p>
    </div>`;
    box.innerHTML += markup

});


