let notas = [];

function adicionarNota() {
    let notaInput = document.getElementById('nota');
    let nota = parseFloat(notaInput.value);

    if(!isNaN(nota)) {
        notas.push(nota);
        document.getElementById('listaNotas').value = notas.join('\n');
        notaInput.value = '';
    }
}

function calcularMedia() {
    if(notas.length === 0) {
        alert('Porfavor insira uma nota.');
        return;
    }

    let soma = notas.reduce((total, num) => total + num,0);
    let media = soma / notas.length;

    document.getElementById('mediaResultado').textContent = media.toFixed(2);
}

function limparTextarea() {
    if (mediaCalculada) {
        document.getElementById('listaNotas').value = '';
        document.getElementById('mediaResultado').textContent = '';
        notas = []; 
    }
}

document.getElementById('nota').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarNota();
    }
});