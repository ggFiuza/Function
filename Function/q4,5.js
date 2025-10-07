function renderizarSiteAutomatico(){
    const dadosPesquisados = buscaDados()
    criarNo(dadosPesquisados)
}

function buscaDados(){
    const computador = {
        marca: "Positivo",
        processador: "core i3",
        memoria: "8GB",
        hd:"1TB"
    }
    return computador
}

function criarNo(computador){
    const elementoMarca = document.createElement("h1")
    elementoMarca.innerText = `${computador.marca}`

    const elementoProc = document.createElement("h2")
    elementoProc.innerText  = `${computador.processador}`

    const elementoMem = document.createElement("h2")
    elementoMem.innerText = `${computador.memoria}`

    const elementoHd = document.createElement("p")
    elementoHd.innerText = `${computador.hd}`

    const divPC = document.createElement("div")
    divPC.classList.add("produto")

    divPC.appendChild(elementoMarca)
    divPC.appendChild(elementoProc)
    divPC.appendChild(elementoMem)
    divPC.appendChild(elementoHd)

    document.body.appendChild(divPC)
}

renderizarSiteAutomatico()
