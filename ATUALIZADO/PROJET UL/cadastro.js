let usuarios = []

/*  armazena os valores digitados pelo usuário nos inputs; */
function cad(){
    let nome = document.getElementById("nome").value
    let cidade = document.getElementById("cidade").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    
/* cria um objeto 'usuario' para ser adicionado ao array usuarios ('s') */
    let usuario = { nome, cidade, telefone, email, senha};

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        document.getElementById('formCad').reset();

        

    /* os consoles.log são só para fins de testes */
    console.log(usuarios);
    console.log(usuarios.length)
    
}