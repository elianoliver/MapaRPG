var info = document.querySelector('#info')

function clicouno(regiao){
    if(regiao == 'centro'){
        info.innerHTML = '<h2>CENTRO</h2>'
    } else if(regiao == 'docas'){
        info.innerHTML = '<h2>DOCAS</h2>'
    } else if(regiao == 'porto'){
        info.innerHTML = '<h2>PORTO</h2>'
    } else if(regiao == 'hangar'){
        info.innerHTML = '<h2>HANGAR</h2>'
    } else if(regiao == 'sul'){
        info.innerHTML = '<h2>SUL</h2>'
    } else if(regiao == 'centro-publico'){
        info.innerHTML = '<h2>CENTRO PÚBLICO</h2>'
    } else if(regiao == 'oeste'){
        info.innerHTML = '<h2>OESTE</h2>'
    } else if(regiao == 'norte'){
        info.innerHTML = '<h2>NORTE</h2>'
    } else {
        info.innerHTML = '<h2>LESTE</h2>'
    }
}