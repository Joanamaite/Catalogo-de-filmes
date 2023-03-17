let InputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");


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
let listarFilmes = async (filmes) => {
    let listaFilmes = document.querySelector("#lista-filme");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if (filmes.length > 0) {
      filmes.forEach(async (filme) => {
        listaFilmes.appendChild(await filme.getCard());
        filme.getBtnDetalhes().onclick=()=>{
          detalhesFilme(filme.id);
        }
      });
    }
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

      console.log(filme);
    })
  }

 
