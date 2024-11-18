class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion() {
        let generacion = '';
        let rasgoCaracteristico = '';

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = 'Generación Z';
            rasgoCaracteristico = 'Irreverencia';
        } else if (this.anioNacimiento >= 1981 && esta<= 1993) {
            generacion = 'Generación Y (Millennials)';
            rasgoCaracteristico = 'Frustración';
        } else if (this.anioNacimiento >= 1969 && esta<= 1980) {
            generacion = 'Generación X';
            rasgoCaracteristico = 'Obsesión por el éxito';
        } else if (this.anioNacimiento >= 1949 && esta<= 1968) {
            generacion = 'Baby Boom';
            rasgoCaracteristico = 'Ambición';
        } else if (this.anioNacimiento >= 1930 && esta<= 1948) {
            generacion = 'Silent Generation';
            rasgoCaracteristico = 'Austeridad';
        } else {
            generacion = 'Generación desconocida';
            rasgoCaracteristico = 'Desconocido';
        }

        return `La persona pertenece a la ${generacion} y su rasgo característico es ${rasgoCaracteristico}.`;
    }

    esMayorDeEdad() {
        return this.edad >= 18 ? 'La persona es mayor de edad.' : 'La persona no es mayor de edad.';
    }

    mostrarDatos() {
        return `
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            DNI: ${this.dni}
            Sexo: ${this.sexo}
            Peso: ${this.peso} kg
            Altura: ${this.altura} m
            Año de Nacimiento: ${this.anioNacimiento}
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let persona;

    document.getElementById('crear-persona').addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const edad = parseInt(document.getElementById('edad').value);
        const dni = document.getElementById('dni').value;
        const sexo = document.getElementById('sexo').value;
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const anioNacimiento = parseInt(document.getElementById('anio-nacimiento').value);

        persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
        alert('Persona creada exitosamente');
    });

    document.getElementById('mostrar-generacion').addEventListener('click', function() {
        if (persona) {
            alert(persona.mostrarGeneracion());
        } else {
            alert('Primero crea una persona.');
        }
    });

    document.getElementById('es-mayor-edad').addEventListener('click', function() {
        if (persona) {
            alert(persona.esMayorDeEdad());
        } else {
            alert('Primero crea una persona.');
        }
    });

    document.getElementById('mostrar-datos').addEventListener('click', function() {
        if (persona) {
            alert(persona.mostrarDatos());
        } else {
            alert('Primero crea una persona.');
        }
    });
});