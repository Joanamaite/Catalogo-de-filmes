class Ator{
    constructor(id,nome){
        this.nome = nome;
        this.id=id;
    }
}
class Diretor{
    constructor(id, nome){
        this.nome= nome;
        this.id =id;
    }
}

class Filme{
    constructor(id,titulo,ano,genero,duracao,cartaz,sinopse,direcao,elenco,classificacao,avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }

    getCard = async()=>{
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-top");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("style","flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
        return card;
    }
    setBtnDetalhes=()=>{
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
      }
       getBtnDetalhes=()=>{
        return this.btnDetalhes
        
      }

    getDetalhesFilme=()=>{
       let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("class","principal");
        let novadiv = document.createElement("div")
        novadiv.setAttribute("class", "novaimagem")
        let imagem = document.createElement("img")
        imagem.setAttribute("src", this.cartaz);
        imagem.setAttribute("class","img");
        let detalhes= document.createElement("div");
        detalhes.setAttribute("class","detalhes");
        let card = document.createElement("div");
        card.setAttribute("id", "card-body");
        let titulo = document.createElement("h5");
        titulo.setAttribute("class","card-title");
        let ano = document.createElement("p");
        ano.setAttribute("class","card-text");
        let genero = document.createElement("p");
        genero.setAttribute("class","card-text");
        let duracao = document.createElement("p");
        duracao.setAttribute("class","card-text");
        let clas = document.createElement("p");
        clas.setAttribute("class","card-text");
        let resumo = document.createElement("p");
        resumo.setAttribute("class","card-text");
        let rank = document.createElement("p");
        rank.setAttribute("class","card-text");
        let elenco = document.createElement("p");
        elenco.setAttribute("class","card-text");
        let ator = document.createElement("p");
        ator.setAttribute("class","card-text");
        
        titulo.appendChild(document.createTextNode(this.titulo));
        ano.appendChild(document.createTextNode("Ano: "+this.ano));
        genero.appendChild(document.createTextNode("Gênero: "+this.genero));
        duracao.appendChild(document.createTextNode("Duração: "+this.duracao));
       clas.appendChild(document.createTextNode("Classificação: "+this.classificacao));
       resumo.appendChild(document.createTextNode("Sinopse: "+this.sinopse));
       rank.appendChild(document.createTextNode("Avaliação: "+this.avaliacao));
       elenco.appendChild(document.createTextNode("Direção: "+this.direcao));
        ator.appendChild(document.createTextNode("Atores: "+this.elenco));
    
         detalhes.appendChild(titulo);
         detalhes.appendChild(ano);
         detalhes.appendChild(genero);
         detalhes.appendChild(duracao);
         detalhes.appendChild(clas)
         detalhes.appendChild(resumo);
         detalhes.appendChild(rank);
        detalhes.appendChild(elenco);
        detalhes.appendChild(ator);
        novadiv.appendChild(imagem);
        detalhes.appendChild(card);
        divDetalhes.appendChild(novadiv);
        divDetalhes.appendChild(detalhes)

        let btnSalvar=document.createElement("button");
        btnSalvar.appendChild(document.createTextNode("Favoritar"));
        btnSalvar.setAttribute("id", "btnSalvar");
        divDetalhes.appendChild(btnSalvar);

        let btnDesfa=document.createElement("button");
        btnDesfa.appendChild(document.createTextNode("Desfavoritar"));
        btnDesfa.setAttribute("id", "btnDesfa");
        divDetalhes.appendChild(btnDesfa);

        let btnFechar = document.createElement("button");
        btnFechar.appendChild(document.createTextNode("Fechar"));
        btnFechar.setAttribute("id", "btnFechar");
        divDetalhes.appendChild(btnFechar);
        return divDetalhes;
        
      }

      
     
    
 }

