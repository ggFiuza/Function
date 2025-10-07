let alu1 = {
    nome: "Guilherme",
    nota: "4",

}

let alu2 = {
    nome: "Rafael",
    nota: "7",

}

let alu3 = {
    nome: "Otavio",
    nota: "7",

}

let alunos = [alu1, alu2, alu3]


function escrever() {

    const divALu = document.createElement("div")
    divALu.classList.add("Alunos")

    for (i = 1; i <= 3; i++) {

        const nomeElement = document.createElement("h3"); 
        nomeElement.innerText = alunos[i].nome;
        divALu.appendChild(nomeElement); 

        const notaElement = document.createElement("p");  
        notaElement.innerText = alunos[i].nota;
        divALu.appendChild(notaElement);

    }

    const div = document.getElementsByClassName("Aluno")
    for (let i = 0; i < div.length; i++) {
        div[i].style.border = "1px solid blue";
    }

    document.body.appendChild(divALu)


}

escrever()