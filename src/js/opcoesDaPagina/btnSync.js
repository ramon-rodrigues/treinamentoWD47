// IIFE
;(function(){
    'use strict'
    
    const $btnSync = $('#btnSync')
    $btnSync.removeClass('botaoSync--sincronizado')
    const cartoes = []

    $btnSync.on('click', function(){

       sincronizar();
        
    })



    $btnSync.removeClass('no-js')
})()