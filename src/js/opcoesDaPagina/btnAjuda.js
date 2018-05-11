// IIFE
(function() {
    'use strict'

    const $btnAjuda = $('#btnAjuda')

    $btnAjuda.on('click', function() {
        const pegaAjudas = new XMLHttpRequest()

        pegaAjudas.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes')        
        pegaAjudas.responseType = 'json'
        pegaAjudas.send()


        pegaAjudas.addEventListener('load', function() {
            pegaAjudas.response.instrucoes.forEach(function(ajudaAtual) {
                console.log(ajudaAtual)
                window.mural.adicionaCartaozinhoNoMural(ajudaAtual)
            })
        })

        console.log('Primeiro', pegaAjudas)




        // ajudas.forEach(function(ajudaAtual) {
        //     console.log(ajudaAtual)
        //     window.mural.adicionaCartaozinhoNoMural(ajudaAtual)
        // })

        // function forEach(funcaoQueVaiExecutarACadaVolta) {
        //     // array de ajudas 
        //     for(let ajuda of ajudas) {
        //         funcaoQueVaiExecutarACadaVolta(ajuda)
        //     }
        // }

        // for(let ajuda of ajudas) {
        //     alert(ajuda)
        // }
        // Escrever só um alert
    })

    $btnAjuda.removeClass('no-js')
})()