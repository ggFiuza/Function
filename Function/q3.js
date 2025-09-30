let livros = []


function menu(){


    for ( ; ; ){
    let escolha = prompt("a) Inserir dados do livro (Nome do Livro, Autor, ano publicação, avaliação) \n"+
	"b) Imprimir Nomes de todos os livros cadastrados \n" +
	"c) Imprimir Todos os dados de um livro específico \n" +
	"d) Imprimir todos os dados dos livros de um autor específico \n" +
	"e) Encerrar ")

    if (escolha == 'a'){
        novoLivro()
    }
    else if (escolha == 'b'){
        imprimirTodos()
    }
    else if (escolha == 'c'){
        imprimirLivro()
    }
    else if (escolha == 'd'){
        imprimirUmLivro()
    }
    else if (escolha == 'e'){
        encerrar()
        break;
    }

    }

}

function novoLivro(){
    
 let nome = prompt("Digite o nome do livro:")
  let autor = prompt("Digite o autor do livro")
  let ano = prompt("Digite o ano de lançamento:")
  let avaliacao = prompt("Digite sua nota para o filme:")

let livro = {
    nome: nome,
    autor: autor,
    ano:  ano,
    avaliacao: avaliacao
  }

  livros.push(livro)
}

function imprimirTodos(){
    for (let i = 0; i < livros.length; i++) {
        console.log(livros[i].nome)
    }
}

function imprimirLivro(){
    let nome = prompt("Digite o nome do livro que deseja ver:")
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].nome === nome) {
            console.log(livros[i])
        }
    }
}

function imprimirUmLivro(){
    let autor = prompt("Digite o nome do autor:")
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].autor === autor) {
            console.log(livros[i])
        }
    }
}

function encerrar(){
    alert("Programa encerrado! Obrigado por utilizar")
}

menu()
