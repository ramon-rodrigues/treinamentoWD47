(function(){
    'use strict'
    const $btnAjuda = $('#btnAjuda')

    $btnAjuda.on('click',function(){
        const ajudas = ["Bem vindo ao Ceep", "Clique no btn linhas para mudar o layout"]
        ajudas.forEach(function(ajuda){
            alert(ajuda)
        });
    })

    $btnAjuda.removeClass('no-js');
})()