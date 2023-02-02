var info = document.querySelector('#info')

function clicouno(regiao){
    if(regiao == 'centro'){
        info.innerHTML = '<h2>CENTRO</h2>'
        info.innerHTML += '<p>Diferente de todos os outros esse tem uma grande sensação de claustrofobico, devido aos prédios enormes que mal deixavam o sol chegar no solo, se procura um emprego, lá é um bom lugar para ir atrás, e divide com a leste as residenciais da classe media.</p>'

    } else if(regiao == 'docas'){
        info.innerHTML = '<h2>DOCAS</h2>'
        info.innerHTML += '<p>Além de ser usado como despacho para os navios tambem, é despacho para os acertos de contas no porto, são poucas noticias que se tem de la, mas as suspeitas contra as vistorias são altas</p>'

    } else if(regiao == 'porto'){
        info.innerHTML = '<h2>PORTO</h2>'
        info.innerHTML += '<p>Com diversos ex-presidiários tralhando ali deixa o porto bem menos confiável aos olhos da sociedade, mas ele incrivelmente está funcionando e dificilmente sai nas capas de jornais, apenas quando há acertos de contas lá dentro....</p>'

    } else if(regiao == 'hangar'){
        info.innerHTML = '<h2>HANGAR</h2>'
        info.innerHTML += '<p style="text-align:center; text-indent:0px; vertical-align:middle">Hangar</p>'

    } else if(regiao == 'sul'){
        info.innerHTML = '<h2>SUL</h2>'
        info.innerHTML += '<p>Mansões enormes dentro de condomínios maiores ainda, cada vez mais luxuosos que apenas os aproveitadores/privilegiados da classe mais alta de Salmonthy.</p>'

    } else if(regiao == 'centro-publico'){
        info.innerHTML = '<h2>CENTRO PÚBLICO</h2>'
        info.innerHTML += '<p>Tão claustrofobico quanto o centro comum, porem o transito é tão caótico se for mais, já que os pontos principais de todos os transportes públicos se encontram la, então não se assuste se não conseguir pegar 3 ou 4 transportes na hora do rush </p>'

    } else if(regiao == 'oeste'){
        info.innerHTML = '<h2>OESTE</h2>'
        info.innerHTML += '<p>Comerciantes malandros, preços lá em baixo e produtos de origem duvidosa, tudo isso e muito mais se encontra nos grandes mercados da Oeste, que ainda tem seus diversos segredos, as ruas são o caminho para desvenda-lo melhor, mas não é uma tarefa muito facil.</p>'

    } else if(regiao == 'norte'){
        info.innerHTML = '<h2>NORTE</h2>'
        info.innerHTML += '<p>Por ser próxima as colinas e com diversas pessoas amontoadas a norte se assemelha com comunidades cariocas, com diversos becos e vielas, quanto mais alto for pior é o deslocamento por meio de carros. </p>'

    } else {
        info.innerHTML = '<h2>LESTE</h2>'
        info.innerHTML += '<p>Parece ser dois locais em um dependendo do horário que se visita, quando se existe sol, um convite para toda família desfrutar dos restaurantes, shoppings, praias e tudo mais, porem quando se anoitece, e se aproxima mais do mar, uma caixa de pandora com os 7 pecados se abre, com casinos, bares, casas noturnas, prostitutos e todo o prazer carnal mal visto perante ao Senhor.</p>'
    }
}