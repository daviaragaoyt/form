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

document.addEventListener("DOMContentLoaded", function () {
    const animalSelect = document.getElementById("animal");
    const opcao1 = document.getElementById("opcao1");
    const opcao2 = document.getElementById("opcao2");

    // Função para mostrar ou ocultar as opções com base na escolha do usuário
    function mostrarOcultarOpcoes() {
        const escolha = animalSelect.value;
        opcao1.style.display = escolha === "opcao1-cachorro" ? "block" : "none";
        opcao2.style.display = escolha === "opcao2-gato" ? "block" : "none";
    }

    // Adicionar um ouvinte de evento para o evento "change" no select do animal
    animalSelect.addEventListener("change", mostrarOcultarOpcoes);

    // Executar a função inicialmente para configurar o estado inicial
    mostrarOcultarOpcoes();
});

/*Função que valida a senha

function validaPassword(senha, minDigits) {

  if (senha.length >= minDigits) {
      return false
  }
  //Senhas invalidas
  return true
}
*/