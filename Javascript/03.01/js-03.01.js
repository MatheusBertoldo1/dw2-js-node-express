class Carro {
    //Para criar os atributos da classe deve-se utilizar o método construct
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    //Métodos
    buzinar(){
        return 'Beep! Beep!'
    }
}

//Criando INSTÂNCIAS (obejtos) derivadas da classe Carro
const carroPopular = new Carro("Fiat", "Uno", 2012)

document.write(`<p>O carro ${carroPopular.marca} é do modelo ${carroPopular.modelo} e do ano ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}</p>`)

const carroEsportivo = new Carro()
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2024

document.write(`<p>O carro ${carroEsportivo.marca} é do modelo ${carroEsportivo.modelo} e do ano ${carroEsportivo.ano}. Quando buzina faz ${carroPopular.buzinar()}</p>`)

//Criando um novo atributo exclusico a um objeto instânciado
carroEsportivo.corNeon = "Azul"
carroEsportivo.turbo = () => "Vrumm"

document.write(`<p>O carro ${carroEsportivo.marca}, do modelo ${carroEsportivo.modelo} tembém possiu neon da cor ${carroEsportivo.corNeon}. Quando usa turbo faz ${carroEsportivo.turbo()}</p>`)
