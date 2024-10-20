document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
});
