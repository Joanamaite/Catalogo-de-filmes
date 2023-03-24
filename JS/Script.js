let InputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let botao = document.querySelector("#btnDetalhesFilme");


btnBuscarFilme.onclick = ()=>{
    if(InputBuscarFilme.value.length>0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?i=tt1201607&apikey=cf99ae7d&s="
        +InputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=>{
          resp.Search.forEach((item) => {
            console.log(item);
            let filme = new Filme(
                item.imdbID,
                item.Title, 
                item.Year,
                null, 
                null,
                item.Poster,
                null,
                null,
                null,
                null,
                null
            );
            filmes.push(filme);
          });
          listarFilmes(filmes);
        });
    }
    return false;
}

let detalhesFilme = async(id)=>{
  fetch("https://www.omdbapi.com/?apikey=cf99ae7d&i="+id)
  .then((resp)=> resp.json())
  .then((resp)=>{
    console.log(resp);
    let filme = new Filme(
      resp.imdbID,
      resp.Title,
      resp.Year,
      resp.Genre.split(","),
      resp.Runtime,
      resp.Poster,
      resp.plot,
      resp.Director,
      resp.Actors.split(","),
      resp.Awards,
      resp.imdbRating
    )
    document.querySelector("#lista-filme").innerHTML="";
    document.querySelector("#mostrar-filme").innerHTML="";
  console.log(filme.getDetalhesFilme());
   document.querySelector("#lista-filme").appendChild(filme.getDetalhesFilme());
  });
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filme");
    listaFilmes.style.dispay="flex";
    listaFilmes.innerHTML="";
   document.querySelector("#mostrar-filme").innerHTML="";
   document.querySelector("#mostrar-filme").style.display="none";
    if (filmes.length > 0) {
      filmes.forEach(async (filme) => {
        listaFilmes.appendChild(await filme.getCard());
        filme.getBtnDetalhes().onclick=()=>{
         detalhesFilme(filme.id);
        }
      });
    }
  }
