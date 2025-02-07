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