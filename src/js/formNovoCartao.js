// IIFE
(function($) {
    'use strict'

    
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
            
            // criando cartao anteriormente 
            window.mural.adicionaCartaozinhoNoMural({ conteudo: conteudoDoCartao })

            // Limpa o formulário \/ 
            $campoDoFormulario.value = ''

        }


    })


    formulario.classList.remove('no-js')
})(jQuery)