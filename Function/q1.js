function menu() {

    const estado = {
        vendas: 0,
        totalVendas: 0,
        despesas: 0,
        totalDespesas: 0
    }

    for (; ;) {
        let escolha = prompt(
            "a) Inserir Valor de uma Venda \n" +
            "b) Ver status das vendas do dia (numero de vendas e valor total vendido) \n" +
            "c) Inserir Valor de uma Despesa \n" +
            "d) Ver total de despesas do dia \n" +
            "e) Encerrar "
        )

        if (escolha == 'a') {
            inserirVenda(estado)
        } else if (escolha == 'b') {
            sttatus(estado)
        } else if (escolha == 'c') {
            inserirDespesa(estado)
        } else if (escolha == 'd') {
            verTotal(estado)
        } else if (escolha == 'e') {
            encerrar()
            break
        }  else {
            alert("Tente Novamente!")
        }
    }
}

function inserirVenda(estado) {
    let valor = Number(prompt("Insira o valor da venda"))
    estado.vendas++
    estado.totalVendas += valor
}

function sttatus(estado) {
    alert("Numero de vendas do dia: " + estado.vendas)
    alert("Valor total das vendas do dia: " + estado.totalVendas)
}

function inserirDespesa(estado) {
    let valor = Number(prompt("Insira o valor da despesa"))
    estado.despesas++
    estado.totalDespesas += valor
}

function verTotal(estado) {
    alert("Numero de despesas do dia: " + estado.despesas)
    alert("Valor total das despesas do dia: " + estado.totalDespesas)
}

function encerrar() {
    alert("Programa encerrado! Obrigado por utilizar")
}

menu()