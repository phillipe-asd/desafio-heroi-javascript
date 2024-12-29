class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        if(this.tipo === "mago"){
            ataque = "usando magia";
        } else if(this.tipo === "guerreiro"){
            ataque = "usando espada";
        } else if(this.tipo === "monge"){
            ataque = "usando artes marciais";
        } else if(this.tipo === "ninja"){
            ataque = "usando shuriken";
        }

        console.log(`O ${this.nome} de ${this.idade} anos de idade, heroi do tipo ${this.tipo}, fez um ataque ${ataque}.`)
    }
}

const heroi1 = new heroi("Naruto", 13, "mago");
heroi1.atacar() 
