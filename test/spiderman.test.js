const spiderman = require('./../app/spiderman');

describe("Unit test for spiderman class", () => {
    test('1. Create an spiderman object', () => {
        //instanciaremos un nuevo objeto con la informacion requerida, que es nombre, edad, actor, numero de peliculas y estudio de cine
        const andrewG = new spiderman('Andrew Garfield', 38, 'Peter Parker', 3, 'Sony')

        //comprobamos que el codigo funcione como queremos
        expect(andrewG.name).toBe('Andrew Garfield'),
        expect(andrewG.age).toBe(38),
        expect(andrewG.actor).toBe('Peter Parker'),
        expect(andrewG.numberOfMovies).toBe(3),
        expect(andrewG.studio).toBe('Sony')
    });
})

//se a comprobado que la prueba funcione de manera correcta