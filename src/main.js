class Dado {
    lanzar() {
        return (Math.floor(Math.random() * 20 + 1));
    }
}

class Tortuga {
    constructor() {
        this._posicion = 0;
        this._dado = new Dado();
    }

    getPosicion() {
        return this._posicion;
    }

    correr() {
        let cara = this._dado.lanzar();

        if (cara <= 10) {
            this._posicion += 3;
        } else if (cara <= 17) {
            this._posicion -= 6;
        } else {
            this._posicion += 1;
        }
    }
}

class Liebre {
    constructor() {
        this._posicion = 0;
        this._dado = new Dado();
    }

    getPosicion() {
        return this._posicion;
    }

    correr() {
        let cara = this._dado.lanzar();

        if (cara <= 4) {
            this._posicion += 0;
        } else if(cara <= 8) {
            this._posicion += 9;
        } else if(cara <= 10) {
            this._posicion -= 12;
        } else if(cara <= 17) {
            this._posicion += 1;
        } else {
            this._posicion -= 2;
        }
    }
}

let liebre1 = new Liebre();
let tortuga1 = new Tortuga();


class Carrera {
    
    carrera() {
        do {
            tortuga1.correr();
            liebre1.correr();
            console.log(`Tortuga: ${tortuga1.getPosicion()}`);
            console.log(`Liebre: ${liebre1.getPosicion()}`);
        } while(tortuga1.getPosicion() < 100 && liebre1.getPosicion() < 100);    
    }

    ganador() {
        if(liebre1.getPosicion() > tortuga1.getPosicion()) {
            console.log('La liebre ha ganado');
        } else if (liebre1.getPosicion() == tortuga1.getPosicion()) {
            console.log('EMPATE');
        } else {
            console.log('La tortuga ha ganado');
        }
    }
}

let carrera1 = new Carrera();

carrera1.carrera();
carrera1.ganador();