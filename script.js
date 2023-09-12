//alert("Obrigado por Acessar!");

const form = document.querySelector("#form");
const nameInput = document.querySelector("name");
const spbrenomeInput = document.querySelector("sobrenome");
const emailInput = document.querySelector("email");
const senhaInput = document.querySelector("tel");

function submitFormulario(event) {



    // Verifica se o nome esta vazio
    if (event.srcElement[0].value === "") {
        event.preventDefault()
        alert("Por favor, preecha seu nome");
        return;
    }

    //verifica a data 
    if (event.srcElement[1].value === "") {
        event.preventDefault()
        alert("Por favor, preencha seu sobrenome");
        return;
    }

    //Verifica se o email esta preenchido
    if (event.srcElement[2].value === "") {
        event.preventDefault()
        alert("Por favor, preencha com seu email");
        return;
    }

    //Verificar se o numero está preenchida
    if (validaPassword(event.srcElement[3].value, 8)) {
        event.preventDefault()
        alert("O numero deve ser +55 61 999999999");
        return;
    }

    
}

//cria um regex para validar email
function isEmailValid(email) {

    const emailRegex = new RegExp(
        //usuario@gmail.com
        /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.teste(email)) {
        return true;
    }

    return false;
}

/*Função que valida a senha

function validaPassword(senha, minDigits) {

    if (senha.length >= minDigits) {
        return false
    }
    //Senhas invalidas
    return true
}
*/
// debugger=opcao1,opcao2,opcao3,opcao4;

function alterarClass() {
    if (document.getElementById("opcoes").value == "Cão") {
      document.getElementById("opcao1").className = "cachorro";
      document.getElementById("botaoEnviar").className = "cachorro";
  
      document.getElementById('form').action =active.opcao1;
    }
  
    if (document.getElementById("opcoes").value == "Gato") {
      document.getElementById("opcao2").className = "cat";
      document.getElementById("botaoEnviar").className = "cat";
  
      document.getElementById('form').action = active.opcao2;
    }

    if (document.getElementById("opcoes").value == "Pássaro") {
        document.getElementById("opcao3").className = "pombo";
        document.getElementById("botaoEnviar").className = "pombo";
    
        document.getElementById('form').action = active.opcao3;
      }

      if (document.getElementById("opcoes").value == "Répitil") {
        document.getElementById("opcao4").className = "cobrinha";
        document.getElementById("botaoEnviar").className = "cobrinha";
    
        document.getElementById('form').action = active.opcao4;
      }
  }