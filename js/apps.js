class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        let generacion;
        let rasgo;

        if (this.añoNacimiento >= 1995 && this.añoNacimiento <= 2010) {
            generacion = 'Generación Z';
            rasgo = 'Irreverencia';
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1994) {
            generacion = 'Generación Y (Millennials)';
            rasgo = 'Frustración';
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            generacion = 'Generación X';
            rasgo = 'Obsesión por el éxito';
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            generacion = 'Baby Boom';
            rasgo = 'Ambición';
        } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            generacion = 'Silent Generation';
            rasgo = 'Austeridad';
        } else {
            generacion = 'Desconocida';
            rasgo = 'Desconocido';
        }

        return `Pertenece a la ${generacion} y su rasgo característico es ${rasgo}.`;
    }

    esMayorDeEdad() {
        return this.edad >= 18 ? `${this.nombre} es mayor de edad.` : `${this.nombre} no es mayor de edad.`;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} m\nAño de Nacimiento: ${this.añoNacimiento}`;
    }
}

let persona;

function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const añoNacimiento = document.getElementById('añoNacimiento').value;

    if (nombre && edad && dni && sexo && peso && altura && añoNacimiento) {
        persona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento);
        alert('Persona creada exitosamente');
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function mostrarGeneracion() {
    if (persona) {
        alert(persona.mostrarGeneracion());
    } else {
        alert('Primero crea una persona');
    }
}

function esMayorDeEdad() {
    if (persona) {
        alert(persona.esMayorDeEdad());
    } else {
        alert('Primero crea una persona');
    }
}

function mostrarDatos() {
    if (persona) {
        alert(persona.mostrarDatos());
    } else {
        alert('Primero crea una persona');
    }
}
