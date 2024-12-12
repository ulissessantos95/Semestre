document.addEventListener("DOMContentLoaded", () => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar esta página!");
        window.location.href = "home.html";
        return;
    }

    // Exibe o nome do usuário na página
    document.getElementById("usuario-nome").textContent = usuarioLogado.nome;

    // Função para excluir a conta
    document.getElementById("btn-excluir").addEventListener("click", () => {
        if (confirm("Tem certeza que deseja excluir sua conta?")) {
            // Filtra os usuários removendo o usuário logado
            const usuariosAtualizados = usuarios.filter(
                usuario => usuario.email !== usuarioLogado.email
            );

            // Atualiza o localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

            // Remove os dados do usuário logado
            localStorage.removeItem("usuarioLogado");

            // Redireciona para a página inicial
            alert("Conta excluída com sucesso!");
            window.location.href = "home.html";
        }
    });
});