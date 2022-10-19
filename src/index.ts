
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


class Film {
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



// Nem lett implementálva, de a typescript fordító felismerte!
let f: Multimedia = new Film('Die hard', 18645);

let termekek: Multimedia[] = [
    new Zene('Let it go', 183),
    new Konyv('The Lord of the Rings'),
    new Film('Die hard', 18645),
];

for (let termek of termekek) {
    termek.kiir();
}





interface Streamelheto {
    cim: string;
    hossz: number;
}

let streamelhetoTermekek: Streamelheto[] = [
    new Film('Harry Potter', 2000),
    new Zene('Sweet child of mine', 200),
    {cim : 'Thuderstruck', hossz: 198},
];


// ========

// a type-nál is működik az implements
type StreamelhetoType = {
    cim: string;
    hossz: number;
}

type Alaptipus = number | boolean | string; 

let streamelhetoTermekekType: StreamelhetoType[] = [
    new Film('Harry Potter', 2000),
    new Zene('Sweet child of mine', 200),
    {cim : 'Thuderstruck', hossz: 198},
];


