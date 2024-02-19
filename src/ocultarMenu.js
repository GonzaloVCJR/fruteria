
function ocultarMenu(){
    const botones = document.querySelectorAll('.btnMenu')
    const check = document.querySelector('#check')

    // console.log(botones);

    botones.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        check.checked = false
    })
    })
}

export default ocultarMenu