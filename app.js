const entrada = document.getElementById('entrada')
const length = document.getElementById('length')
const btn = document.getElementById('btn')

btn.addEventListener('click', (target) => {
    target.preventDefault()
    if (length.value < 8 || length.value > 30) {
        alert('La longitud debe estar entre 8 y 30 caracteres.')
    }
    const password = generador(parseInt(length.value))
    entrada.value = password
    
    function generador(longitud) {
        let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:'\",<.>/?"
        let password = "";
        for(let i = 0; i < longitud; i++){
            password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return password;

    }

})