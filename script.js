const entrada = document.querySelector (".entradatexto");
const saida = document.querySelector (".saidatexto");

function btnCripto() {
    const textoCriptografado = criptografar(entrada.value);
    saida.value = textoCriptografado;
    entrada.value = "";
}

function criptografar(mensagemCriptografada) {
    
    let criptoVogais = [["e" , "enter"] , ["i" , "imes"] ,["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    mensagemCriptografada = mensagemCriptografada.toLowerCase();

    for(let i = 0; i < criptoVogais.length; i++) {
        if(mensagemCriptografada.includes(criptoVogais[i][0])) {
            mensagemCriptografada = mensagemCriptografada.replaceAll(criptoVogais[i][0], criptoVogais[i][1]);
        }
    }

    return mensagemCriptografada;
}

function btnDescripto() {
    const textoDescriptografado = descriptografar(entrada.value);
    saida.value = textoDescriptografado;
    entrada.value = "";
}

function descriptografar(mensagemDescriptografada) {
    
    let criptoVogais =[["e" , "enter"] , ["i" , "imes"] ,["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    mensagemDescriptografada = mensagemDescriptografada.toLowerCase();

    for(let i = 0; i < criptoVogais.length; i++) {
        if(mensagemDescriptografada.includes(criptoVogais[i][1])) {
            mensagemDescriptografada = mensagemDescriptografada.replaceAll(criptoVogais[i][1], criptoVogais[i][0]);
        }
    }

    return mensagemDescriptografada;
}

const btnCopiar = document.querySelector(".copiar");

btnCopiar.addEventListener("click", function () {

        const saidatexto = this.previousElementSibling.value;  
        if (navigator.clipboard) {
            navigator.clipboard.writeText(saidatexto).then(function () {
                alert("Texto copiado com sucesso! ");
            }).catch(function (err) {
                alert("Falha ao copiar texto: " + err);
            });
        } else {
            alert("Clipboard API não suportada no seu navegador.");
        }
    });

   
