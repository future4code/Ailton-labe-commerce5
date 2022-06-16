import React, { Component } from 'react'
// import Produtos from './components/Produtos/Produtos'
import "./App.css";
// import Carrinho from './components/Carrinho/Carrinho';

export default class App extends Component {

    state = {

      produtos:[
        {
         id: 1,
        imagem:'https://picsum.photos/id/237/200/300',
        nome: 'Nave espacial',
        preco: 100,
        },
  
        {
          id: 2,
          imagem:'https://picsum.photos/id/237/200/300',
          nome: 'Estação Espacial',
          preco: 200,
        },
  
        {
         id: 3,
          imagem:'https://picsum.photos/id/237/200/300',
          nome: 'Veiculo Exploração',
          preco: 300,
        },
  
  
      ],
    

    carrinho:[],

    inputValorMax: Infinity,
    inputValorMin:'',
    inputBusca:'',
    // quantidade: 1,
    }



  // FUNÇÃO DA CHAMADA DO BOTAO ADICIONAR, RESPONSAVEL POR ADICIONAR O PRODUTO NO ARRAY CARRINHO E ATUALIZAR VALOR

    retornaProdutosCarrinho = (id) =>{

  //   const novoProduto = this.state.produtos.filter((item)=>{

  //     return(item.id === id)
      
  //   })

  //   if(this.state.carrinho.length === 0){

  // const novoProdutoEquantidade = [{...novoProduto[0], 
  //                                 quantidade: 1,}]

  //   }else{

  //     const arrayCarrinho = this.state.carrinho.map((dados)=>{

  //       if(dados.quantidade === 0){
  //         return(
  //           this.state.carrinho
  //         )
  //       }
  //     })


  //   }

  // console.log(novoProdutoEquantidade)                            
  //  console.log(novoProduto)

   }


      
      // console.log('console adiciona ',produtos.id)

      // if(produtos.id === ){

      // }else()
      // this.setState({carrinho: adiciona})

      // console.log(this.state.carrinho)

    // }

    inputValorMaximo = (e) => {

      if(e.target.value !== ""){

        this.setState({
        inputValorMax: e.target.value
      });

      }else{
        this.setState({
          inputValorMax: Infinity
        })
      }

    };
  
    inputValorMinimo = (e) => {
      this.setState({
        inputValorMin: e.target.value
      });
    };
  
    inputBuscaNome = (e) => {
      this.setState({
        inputBusca: e.target.value
      });
    };  

  render() {




// RESPONSAVEL PELA RENDERIZAÇÃO NA PARTE DO CARRINHO

const listaProdutosAdicionados = this.state.carrinho.map((produtos, index) => {
  console.log("produtos", produtos)

      return (
        
          <div key={index}>
            <p> quantidade: {produtos.quantidade}  </p>
            <p> {produtos.nome}</p>   
          
          <p>{produtos.preco}</p> 
          </div>
      );
    });


  const filtragem = this.state.produtos.filter((dados) =>{
    
    if(dados.nome.toLowerCase().includes(this.state.inputBusca.toLowerCase()) && dados.preco >= this.state.inputValorMin && dados.preco <= this.state.inputValorMax){
      return (dados)
    }

  }
  ) 


// console.log(filtragem)
    return (

      <div className="div-container">
      <header>Eu sou header</header>

      <main>
        <section className="sect-filtro">
          <div>
            <h4>Filtros</h4>
            <p>Valor minimo</p>
            <input type={"number"} min="0" onChange={this.inputValorMinimo} value={this.state.inputValorMin}></input>
            <p>Valor maximo</p>
            <input type={"number"} min="0" onChange={this.inputValorMaximo} value={this.state.inputValorMax}></input>
            <p>Buscar por nome</p>
            <input type={'text'} onChange={this.inputBuscaNome} value={this.state.inputBusca}></input>
          </div>
        </section>

        <section className="sect-produtos">
          <div className="div-filtragem">
            <p>Eu sou a filtragem</p>

          <div className="div-ordenacao">

            <p>Ordenação:</p>
            <select name="ordenacao" id="ordenacao">
              <option value="valor-crescente">Crescente</option>
              <option value="valor-decrescente">Decrescete</option>

            </select>

          </div>
          </div>

          <div className="div-produtos">

        {filtragem.map((produtos) => {
      return (
        <div key={produtos.id}>
          <img src={produtos.imagem}></img>
          <p>{produtos.nome}</p>
          <p>{produtos.preco}</p>
          <button onClick={()=>this.retornaProdutosCarrinho(produtos.id)}>Adicionar</button>
        </div>
        )
    })}
           
          </div>
        </section>

        <section className="sect-carrinho">
          <div>
            <p>carrinho</p>
            {/* {this.state.carrinho[1]} {this.state.carrinho[2]} */}
            {/* {this.state.carrinho} */}
            {listaProdutosAdicionados}

          </div>
        </section>
      </main>

      <footer>Eu sou o footer</footer>
    </div>
    )
  }
}