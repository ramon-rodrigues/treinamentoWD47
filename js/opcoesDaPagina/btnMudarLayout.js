const btn = document.querySelector("#btnMudaLayout");

//btn.onclick = mudaTexto
btn.addEventListener('click', mudaTexto)

function mudaTexto(){
    if(btn.textContent.trim() == "Blocos"){
        btn.textContent =  "Linhas"
    }else{
        btn.textContent = "Blocos"        
    }
}

const mural = document.querySelector('.mural')

function mudaLayout(){
    mural.classList.toggle('mural--linha')
}
btn.addEventListener('click', mudaLayout)

btn.classList.remove('no-js')