// Função que executa o login
function logar() {
    // Captura os valores inseridos pelo usuário
    let identidade = document.getElementById('identidade').value;
    let senha = document.getElementById('senha').value;

    // Limpa mensagens de erro anteriores
    let mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = '';

    // Obtém os usuários cadastrados do localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Valida o login comparando os dados inseridos com os cadastrados
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === identidade && usuario.senha === senha);

    // Verifica se o login foi bem-sucedido
    if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        window.location.href = 'sportfloripa';  // Redireciona para a página principal
    } else {
        mensagemErro.textContent = "Email ou senha inválidos."; // Exibe a mensagem de erro
    }
}
