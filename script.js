document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var nascimento = document.getElementById('nascimento').value;
    var email = document.getElementById('email').value;
    var rg = document.getElementById('rg').value;

    if (!nome) {
        alert('Por favor, insira o nome.');
        return;
    }

    if (!nascimento.match(/^\d{2}\/\d{2}\/\d{2}$/)) {
        alert('Por favor, insira a data de nascimento no formato dd/mm/aa.');
        return;
    }

    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (!rg.match(/^\d{2}\.\d{3}\.\d{3}-\d$/)) {
        alert('Por favor, insira um RG válido.');
        return;
    }

    alert('Formulário enviado com sucesso!');
    console.log(nome, nascimento, email, rg)
});
