(function() {

    const btn = document.querySelector('#btnMudaLayout')
    
    btn.addEventListener('click', mudaConteudoDoBotao) // CallBack
    btn.addEventListener('click', mudaLayout) // CallBack
    
    
    function mudaConteudoDoBotao() {
        // lowerCamelCase
        // ; jamais nos meus códigos by: Mario Souto
        // Programação defensiva contra erro do ;
        if(btn.textContent.trim() == 'Linhas') {
            btn.textContent = 'Blocos'
        } else {
            btn.textContent = 'Linhas'
        }
    }
    
    // Adicionar a classe mural--linha
    const mural = document.querySelector('.mural')
    
    
    function mudaLayout() {
        // if(mural.classList.contains('mural--linha')) {
        //     mural.classList.remove('mural--linha')
        // } else {
        //     mural.classList.add('mural--linha')
        // }
        mural.classList.toggle('mural--linha')
    }
    
    // Progressive Enhancement
    btn.classList.remove('no-js')
    
    
    })()
    