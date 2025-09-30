
function menu() {

    let historicoPokemon = []
    let ultimopokemon = []

    for (; ;) {
        let escolha = prompt(
            "a) Gerar pokemão  \n" +
            "b) Taxas de captura \n" +
            "c) Histórico de pokemãos gerados \n" +
            "d) Encerrar "
        )
        if (escolha == 'a'){
            gerarPokemao(historicoPokemon)
        }
        else if(escolha == 'b'){
            taxaDeCaptura()
        }
        else if(escolha =='c'){
            historico(historicoPokemon)
        }
        else if(escolha =='d'){
            encerrar()
            break
        }
}
}

function gerarPokemao(historicoPokemon){
    let comum = ["Persian", "Jigglypuff", "Vulpix", "Raticate", "Metapod"];
    let raro = ["Arcanine", "Lapras", "Dragonite", "Gengar", "Tyranitar"];
    let lendarios = ["Mewtwo", "Lugia", "Rayquaza", "Dialga", "Giratina"];

let chance = Math.random()
let tipo 
let pokemon 

if (chance <= 0.8){
    pokemon = comum[Math.floor(Math.random()* 5)];
    tipo = 'Comum';
}
else if (chance <= 0.95){
    pokemon = raro[Math.floor(Math.random()* 5)]; 
    tipo = 'Raro';
}
else {
    pokemon = lendarios[Math.floor(Math.random()* 5)];
    tipo = 'Lendario';
}

    alert(`Pokemons gerados até o momento ${pokemon} ${tipo} `);


historicoPokemon.push({pokemon, tipo});
}

function historico(historicoPokemon){
        let mensagem = "";
        historicoPokemon.forEach((poke, i) => {
        mensagem += `Pokémon ${i + 1}: ${poke.pokemon} (${poke.tipo})\n` ;
});
        alert(mensagem);
}

menu()