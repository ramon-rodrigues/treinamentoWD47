// IIFE
(function() {
    'use strict'

    let contador = document.querySelectorAll('.cartao').length
    console.log(contador)
    const formulario = document.querySelector('.formNovoCartao')

    formulario.addEventListener('submit', function(event) {
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
            const $msgErro = document.createElement('div')
            // classe
            $msgErro.classList.add('formNovoCartao-msg')
            // texto 
            $msgErro.textContent = 'Não digite vários nada'
            // Mandar o elemento para a página
            const $btnSalvar = formulario.querySelector('.formNovoCartao-salvar')
            $btnSalvar.insertAdjacentElement('beforebegin', $msgErro)

            $msgErro.addEventListener('animationend', function() {
                $msgErro.remove()
            })

        } else {
            contador++
            // Cria o cartão
            // Criar o HTML do elemento
            // const cartao = 

            const mural = document.querySelector('.mural')
            // Criar um Componente
            const tplCartao = document.createElement('tpl')
            // Incubacão de HTML
            tplCartao.innerHTML = `
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
            ` // Template String `` != ''


            const cartao = tplCartao.querySelector('.cartao') 
            
            // Copia e cola todos os eventos do cartão :) dp arquivo cartao.js
            cartao.addEventListener('focusin', function() {
                console.log('Focou dentro do cartao')
                cartao.classList.add('cartao--focado')
            })
            cartao.addEventListener('focusout', function() {
                cartao.classList.remove('cartao--focado')
            })
    
            cartao.addEventListener('change', function(event) {
                const elementoQueFoiClicado = event.target
                console.log('change')
                if(elementoQueFoiClicado.classList.contains('opcoesDoCartao-radioTipo')) {
                    // console.log('Foi clicado o elemento que queremos', elementoQueFoiClicado)
                    const corNovaDoCartao = elementoQueFoiClicado.value
                    cartao.style.backgroundColor = corNovaDoCartao
                }
            })
    
            cartao.addEventListener('keypress', function(propriedadesDoEvento) {
                const isOpcoesDoCartao = event.target.classList.contains('opcoesDoCartao-opcao')
    
                if(isOpcoesDoCartao && (propriedadesDoEvento.key == 'Enter' || propriedadesDoEvento.key == ' ') )  {
                    console.log('Nao deve ativar fora das bolinhas')
                    // console.log('Apertaram ua tecla', propriedadesDoEvento)
                    event.target.click()
                    // Disparar os bagulhos
                }
            })
    
            // # Desafio
            cartao.addEventListener('click', function(event) {
                console.log('Dentro do click')
                const isBtnRemove = event.target.classList.contains('opcoesDoCartao-remove')
                
                if(isBtnRemove) {
                    cartao.classList.add('cartao--some')
                    cartao.addEventListener('transitionend', function () {
                        cartao.remove()
                        console.log('Cartao removeu', cartao)
                    })    
                } 
    
            })

            mural.insertAdjacentElement('afterbegin', cartao)

            $campoDoFormulario.value = ''

        }


    })


    formulario.classList.remove('no-js')
})()