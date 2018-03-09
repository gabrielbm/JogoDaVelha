
var vez = "x";
var ultima;

function clicado(botao) {
	if (botao.innerText != "")
		return; // botão já clicado
		
	if (vez == "x") {
		botao.innerText = "x";
		vez = "o";
	} else {
		botao.innerText = "o";
		vez = "x";
	}
	ultima = botao;
}

function desfazendo(refazer){
    ultima.innerText = "";
    
    if(vez == "x"){
        vez = "o"
    } else {
        vez = "x"
    }
}
