
// const saludar = function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }
const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 =  (nombre) => `Hola, ${nombre}`;
const saludar4 =  () => `Hola Mundo`;

// console.log(saludar('Vegeta'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ( {
        uid: 'ABC123',
        username: 'El_Papi1502'
    })

const user = getUser();

console.log(user);

// Tarea
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

function getUsuarioActivo (nombre) {
    return {
    uid: 'ABC567',
    username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const id = (nombre) =>({
    uid: '123456',
    username: nombre
    });

    console.log(id('Facundo'));