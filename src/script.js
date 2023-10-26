class Hero {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackMode = ""
        switch (this.type) {
            case "mago":
                attackMode = "magia";
                break;
            case "guerreiro":
                attackMode = "espada";
                break;
            case "monge":
                attackMode = "artes marciais";
                break;
            case "ninja":
                attackMode = "shuriken";
                break;
            default:
                attackMode = "indefinido";
        }
        return console.log(`O ${this.name} atacou usando ${attackMode}`);
    }
}

let hero1 = new Hero("Merlin", 20, "mago");
let hero2 = new Hero("Gandalf", 50, "guerreiro");
let hero3 = new Hero("Loki", 30, "monge");

hero1.attack();
hero2.attack();
hero3.attack();
