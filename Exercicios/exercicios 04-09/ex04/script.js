const container = document.getElementById("container")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

function modo_claro(){
    container.style.backgroundColor = "rgb(240, 240, 240)"
    btn2.style.color = "rgb(95, 95, 95)"
    btn1.style.color = "rgb(95, 95, 95)"
    btn1.style.boxShadow = "0 0 4px 2px #cccccc"
    btn2.style.boxShadow = "0 0 4px 2px #cccccc"
    btn1.style.backgroundColor = 'transparent'
    btn2.style.backgroundColor = 'transparent'
}

function modo_escuro(){
    container.style.backgroundColor = "rgb(95, 95, 95)"
    btn1.style.color = "rgb(241, 241, 241)"
    btn2.style.color = "rgb(241, 241, 241"
    btn1.style.backgroundColor = 'rgb(34, 34, 34)'
    btn2.style.backgroundColor = 'rgb(34, 34, 34)'
    btn1.style.boxShadow = "0 0 4px 3px rgb(75, 74, 74)"
    btn2.style.boxShadow = "0 0 4px 3px rgb(75, 74, 74)"
    
}