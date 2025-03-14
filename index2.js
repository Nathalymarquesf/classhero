class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar () {
        let ataque;
        if (this.tipo === "mago") {
        ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
        ataque = "usou espada"
        } else if (this.tipo === "monge") {
        ataque = "tocou o sino tibetano"
        } else if (this.tipo === "ninja") {
        ataque = "usou shuriken"
        } else {
        ataque = "usou um ataque desconhecido"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi = new Hero("Salomão", 25, "guerreiro");
heroi.atacar();

const mago = new Hero("Abrãao", 100, "mago");
mago.atacar();

const monge = new Hero("Chichi", 88, "monge")
monge.atacar();

const ninja = new Hero("naruto", 55, "ninja")
ninja.atacar();
