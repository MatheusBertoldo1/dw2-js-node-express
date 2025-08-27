//Metodos de manipulação de vetores

let vetor =  ['laranja', 'Maçã', 'Banana']

document.write(`<p>Nosso vetor é ${vetor}</p>`)

vetor[3] = 'Morango'
document.write(`<p>Nosso vetor agora é ${vetor}</p><hr>`)


//Usando método PUSH para inserir elemento no FINAL do vetor
vetor.push('Abacaxi')
document.write(`<p>Nosso vetor, após o <b>push:</b> ${vetor}</p>`)

//Usando método PUSH para inserir elemento no INICIO do vetor
vetor.unshift('Laranja')
document.write(`<p>Nosso vetor, após o <b>unshift:</b> é ${vetor}</p><hr>`)

//Usando método LENGTH para CONTAR os elementos do vetor
let numbers = [1,63,3,8,9]
document.write(`<p>Nosso vetor numérico é ${numbers}</p>`)
document.write(`<p>A quantidade de elementos dentro desse vetor é ${numbers.length}</p>`)

//Usando método SORT para ORDENAR os elementos do vetor (necessário usar a arrow function dentro do sort para trabalhar com números)
document.write(`<p>Nosso vetor, após usar o método <b>sort</b> par aordenar os elementos de forma crescente ${numbers.sort((a, b) => a - b)}</p>`)
document.write(`<p>Nosso vetor, após usar o método <b>sort</b> par aordenar os elementos de forma decrescente ${numbers.sort((a, b) => b - a)}</p>`)


