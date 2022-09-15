class automovel {
    #nome;
    #marca;
    #ano;
    constructor(motor, h, g, y) {
        this.motor = motor;
        this.#nome = motor;
        this.#marca = motor;
        this.#ano = motor;
    }
    acelerar() {
        return this.motor.acelerar();
    }
    get nome() {
        console.log("get nome[] {SUCESSO}");
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    get marca() {
        return this.#marca;
    }
    set marca(marca) {
        this.#marca = marca;
    }
    get marca() {
        return this.#marca;
    }
    /**
         * @param {any} ano
         */
    set ano(ano) {
        this.#ano = ano;
    }
}
