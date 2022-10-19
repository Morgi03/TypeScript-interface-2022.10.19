"use strict";
class Zene {
    constructor(cim, hossz) {
        this.cim = cim;
        this.hossz = hossz;
    }
    kkir() {
        console.log(this.toString());
    }
    toString() {
        return this.cim + " (" + this.hossz + " s)";
    }
}
let zene = new Zene('Let it go', 183);
zene.kkir();
