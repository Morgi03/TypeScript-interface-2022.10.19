
interface Multimedia {
    cim: string;


    // Kiírja a konzolra a multimédia termék leírását
    kkir(): void;
    toString(): string;
}

class Zene implements Multimedia {
    cim: string;
    hossz: number;

    constructor(cim: string, hossz: number) {
        this.cim = cim;
        this.hossz = hossz;
    }

    kkir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.cim + " (" + this.hossz + " s)";
    }

}

let zene = new Zene('Let it go', 183);
zene.kkir();



