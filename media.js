let notas = [];

function adicionarNota() {
    let notaInput = document.getElementById('nota');
    let nota = parseFloat(notaInput.value);

    if(!isNaN(nota)) {
        notas.push(nota);
        let listaNotas = notas.map((nota, index) => `A nota ${index + 1} foi ${nota}`).join('\n');
        document.getElementById('listaNotas').value = listaNotas;
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

document.getElementById('nota').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarNota();
    }
});