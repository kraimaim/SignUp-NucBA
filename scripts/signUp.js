let elementoName = document.getElementById('name')
let elementoEmail = document.getElementById('email')
let elementoPassword = document.getElementById('password')
const boton = document.getElementById('createButton')



function showUsuarios (e) {
    e.preventDefault()
    let usuario = {nombre: elementoName.value, email: elementoEmail.value, password: elementoPassword.value }
    
    console.log(usuario);
}

boton.addEventListener('click', showUsuarios)


