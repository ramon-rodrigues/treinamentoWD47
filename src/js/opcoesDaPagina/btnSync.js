// IIFE
;(function(){
    'use strict'
    
    const $btnSync = $('#btnSync')
    $btnSync.removeClass('botaoSync--sincronizado')
    

    $btnSync.on('click', function(){

        window.mural.sincronizar();
        
    })  

    $btnSync.removeClass('no-js')
})()