// Aula semana 2 


const adicionar = (lista,fruta) => {
        lista.push(fruta)
        return lista
}
let frutas = ["Uva","Limão"]
frutas = adicionar(frutas,"Abacaxi")
console.log(frutas)

const remover = (lista) => {
        lista.shift()
        return lista
}

const ordemUltimoParaPrimeiro = (lista) => {
     let temp = lista[0]
     lista[0] = lista[-1]
     lista[-1] = temp
    return lista
}