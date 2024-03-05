const randomName = ['aNTonIO', 'gIoVANnI', 'sIMONE', 'jOy', 'tOmMaSo'];
console.log(randomName);

const correctName =  randomName.map (nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase())

// slice(i) fa riferimento sempre all'indice da cui vogliamo partire, in questo caso il secondo carattere della parola; 

console.log(correctName);