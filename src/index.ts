
interface Multimedia {
    cim: string;


    // Kiírja a konzolra a multimédia termék leírását
    kiir(): void;
    toString(): string;
}

class Zene implements Multimedia {
    cim: string;
    hossz: number;

    constructor(cim: string, hossz: number) {
        this.cim = cim;
        this.hossz = hossz;
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.cim + " (" + this.hossz + " s)";
    }

}

class Konyv implements Multimedia {
    #cim: string;

    constructor(cim: string) {
        this.#cim = cim;
    }

    get cim() {
        return this.#cim;
    }

    set cim(cim: string) {
        this.#cim = cim
    }


    kiir(): void {
        console.log(this.toString())
    }
    toString(): string {
        return this.#cim;
    }

}


let zene = new Zene('Let it go', 183);
zene.kiir();


let termekek: Multimedia[] = [
    new Zene('Let it go', 183),
    new Konyv('The Lord of the Rings'),
];

for (let termek of termekek) {
    termek.kiir();
}
