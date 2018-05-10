// IIFE
(function() {
    'use strict'

    let contador = document.querySelectorAll('.cartao').length
    console.log(contador)
    // const formulario = document.querySelector('.formNovoCartao')7
    const formulario = $('.formNovoCartao')

    //formulario.addEventListener('submit', function(event) {
    formulario.on('submit', function(event) {
        event.preventDefault()

        // Pega o campo
        const $campoDoFormulario = document.querySelector('.formNovoCartao-conteudo')
        const conteudoDoCartao = $campoDoFormulario.value

        const isCampoDoFormulario = conteudoDoCartao.trim().length === 0
        // Validar se existe conteudo
        if(isCampoDoFormulario) {
            // <div class="formNovoCartao-msg">
            //     Não digite vários nada
            // </div>
            // div
            const $msgErro = $('<div>')
            // classe
            $msgErro.addClass('formNovoCartao-msg')
            // texto 
            $msgErro.text('Não digite vários nada')
            // Mandar o elemento para a página
            const $btnSalvar = formulario.find('.formNovoCartao-salvar')
            $btnSalvar.before( $msgErro)

            $msgErro.on('animationend', function() {
                $msgErro.remove()
            })

        } else {
            contador++
            // Cria o cartão
            // Criar o HTML do elemento
            // const cartao = 

            // const mural = document.querySelector('.mural')
            const mural = $('.mural')
            // Criar um Componente
            const cartao = $(`
            <article id="cartao_${contador}" class="cartao" tabindex="0">
                <div class="opcoesDoCartao">
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                    </button>
            
                    <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                    Padrão
                    </label>
            
                    <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                    Importante
                    </label>
            
                    <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                    Tarefa
                    </label>
            
                    <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                    Inspiração
                    </label>
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
            </article>
            `) // Template String `` != ''


            // const cartao = tplCartao.querySelector('.cartao') 
            
            // Copia e cola todos os eventos do cartão :) dp arquivo cartao.js
            cartao.on('focusin', function() {
                console.log('Focou dentro do cartao')
                cartao.addClass('cartao--focado')
            })
            cartao.on('focusout', function() {
                cartao.removeClass('cartao--focado')
            })
    
            cartao.on('change', function(event) {
                const elementoQueFoiClicado = $(event.target)
                
                // console.log('Vainnn change - ' + elementoQueFoiClicado.hasClass('opcoesDoCartao-radioTipo') + ' - ' + elementoQueFoiClicado.val())

                if(elementoQueFoiClicado.hasClass('opcoesDoCartao-radioTipo')) {
                    // console.log('Foi clicado o elemento que queremos', elementoQueFoiClicado)
                    const corNovaDoCartao = elementoQueFoiClicado.val()
                    // cartao.style.backgroundColor = corNovaDoCartao
                    cartao.css('background-color', corNovaDoCartao)
                }
            })
    
            cartao.on('keypress', function(propriedadesDoEvento) {
                const isOpcoesDoCartao = $(event.target).hasClass('opcoesDoCartao-opcao')
    
                if(isOpcoesDoCartao && (propriedadesDoEvento.key == 'Enter' || propriedadesDoEvento.key == ' ') )  {
                    console.log('Nao deve ativar fora das bolinhas')
                    // console.log('Apertaram ua tecla', propriedadesDoEvento)
                    $(event.target).click()
                    // Disparar os bagulhos
                }
            })
    
            // # Desafio
            cartao.on('click', function(event) {
                console.log('Dentro do click')
                const isBtnRemove = $(event.target).hasClass('opcoesDoCartao-remove')
                
                if(isBtnRemove) {
                    cartao.addClass('cartao--some')
                    cartao.on('transitionend', function () {
                        cartao.remove()
                        console.log('Cartao removeu', cartao)
                    })    
                } 
    
            })

            //mural.insertAdjacentElement('afterbegin', cartao)
            mural.prepend(cartao);


            $campoDoFormulario.value = ''

        }


    })

    // formulario.classList.remove('no-js')
    formulario.removeClass('no-js')
})()