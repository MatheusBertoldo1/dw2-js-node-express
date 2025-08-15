//ARRAYS: servem para armazenar diferentes elementos em uma única varaável

const products = ['Computador', 'Notebook', 'Celular', 'Tablet']
document.write(`<p>${products}</p>`)
document.write(typeof(products))
document.write(`<p>${products}</p>`)

document.write(`<p>Percorrendo um array com forEach: </p>`)

products.forEach((produto, i )=> {document.write(`<p>${i + 1} - ${produto}</p>`)})