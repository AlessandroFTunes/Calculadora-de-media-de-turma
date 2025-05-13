
document.getElementById("myButton").addEventListener("click", CalcularMedia);
function CalcularMedia() {
    var quantidade = document.getElementById("qtdAlunos").value;
    var notasTexto = document.getElementById("notas").value;
    
    // Divide as notas separadas por vírgula
    var notasArray = notasTexto.split(",");
    
    if (notasArray.length !== quantidade) {
        document.getElementById("resultado").innerText = 
            "Erro: A quantidade de notas não corresponde ao número de alunos.";
            console.log(notas);
        return;
    }

    var soma = 0;

    for (var i = 0; i < notasArray.length; i++) {
        var nota = parseFloat(notasArray[i]);

        // Verifica se é um número válido
        if (isNaN(nota)) {
            document.getElementById("resultado").innerText = 
                `Erro: Valor inválido na posição ${i + 1}.`;
            return;
        }

        soma += nota;
    }

    var media = soma / quantidade;

}

function rodar() {
    var media = CalcularMedia();
    
    if (media !== null) {
        document.getElementById("resultado").innerText = 
            `A média das notas é: ${media.toFixed(2)}`;
    }
}