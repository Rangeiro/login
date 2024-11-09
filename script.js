var login = document.getElementById('login')
var enter = document.getElementById('sign-in')
var continer = document.getElementById(`continer`)
var novo = document.getElementById(`sign-up`)
var msg1 = document.getElementById(`msg1`)
var msg2 = document.getElementById(`msg2`)

function entrar(){
    login.style.display = `none`
    novo.style.display = `none`
    enter.style.display = `flex`
    continer.style.justifyContent = `space-between`
    msg1.style.display = `flex`
    msg2.style.display = `none`
    
}

function criar() {
    login.style.display = `none`
    novo.style.display = `flex`
    enter.style.display = `none`
    continer.style.justifyContent = `space-between`
    msg2.style.display = `flex`
    msg1.style.display = `none`
}

function voltar() {
    login.style.display = `block`
    novo.style.display = `none`
    enter.style.display = `none`
    continer.style.justifyContent = `space-around`
    msg2.style.display = `none`
    msg1.style.display = `none`

}