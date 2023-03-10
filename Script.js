let InputBuscarFilme = document.querySelector("#input-buscar-filme");
let BtnBuscarFilme = document.querySelector("#btn-buscar-filme");

BtnBuscarFilme.onclick = ()=>{
    if(InputBuscarFilme.value.length>0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt1201607&apikey=cf99ae7d&s="+InputBuscarFilme.value, {mode:"cors"})
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
        })
    }

    return false;
}
let GetCard = async()=>{
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class", "card-img-top");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-box");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoProducao = document.createElement("div");
    divAnoProducao = setAttribute("style","flex-grow:1;");
}
let listarFilmes = async(filmes) =>{
    let listaFilmes = await document.querySelector("")
}