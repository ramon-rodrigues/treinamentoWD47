// IIFE
;(function(){
    'use strict'
    
    const $btnSync = $('#btnSync')
    $btnSync.removeClass('botaoSync--sincronizado')
    const cartoes = []

    $btnSync.on('click', function(){
        $('.cartao').each(function(indice){
            const cartaoJuqueri = $(this)
            const cartaoObj = {
                conteudo: cartaoJuqueri.find('.cartao-conteudo').text(),
                cor: cartaoJuqueri.css('background-color')
            }
            cartoes.push(cartaoObj)
        })
        console.log(cartoes)

        const infosDoMural = {
            usuario : 'ramonCosta',
            cartoes : cartoes 
        }
        
        const xhr = new XMLHttpRequest()
        xhr.open('POST','http://ceep.herokuapp.com/cartoes/salvar')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(infosDoMural))

        $btnSync.removeClass('botaoSync--sincronizado')
        $btnSync.removeClass('botaoSync--deuRuim')
        $btnSync.addClass('botaoSync--esperando')

        xhr.addEventListener('load', function(){
            $btnSync.addClass('botaoSync--sincronizado')
            $btnSync.removeClass('botaoSync--esperando')
            console.log('Test ',xhr.response)

        })


        xhr.addEventListener('error', function(){
            $btnSync.addClass('botaoSync--deuRuim')
            $btnSync.removeClass('botaoSync--esperando')
        })
    })
    $btnSync.removeClass('no-js')
})()