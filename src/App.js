import React, { Component } from "react";
// import Produtos from './components/Produtos/Produtos'
import "./App.css";
// import Carrinho from './components/Carrinho/Carrinho';

export default class App extends Component {
  state = {
    produtos: [
      {
        id: 1,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Nave espacial",
        preco: 100,
      },

      {
        id: 2,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Estação Espacial",
        preco: 200,
      },

      {
        id: 3,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
    ],

    carrinho: [],

    inputValorMax: Infinity,

    inputValorMin:'',
    inputBusca:'',
    quantidade: 0,
    ordenacao:'valor-crescente'
    }



  // FUNÇÃO DA CHAMADA DO BOTAO ADICIONAR, RESPONSAVEL POR ADICIONAR O PRODUTO NO ARRAY CARRINHO E ATUALIZAR VALOR

    retornaProdutosCarrinho = (produto) => {
      const carrinho = this.state.carrinho
      const productExists = carrinho.find((p) => p.id === produto.id);
  
      if (productExists) {
        productExists.quantidade += 1;
      } else {
        produto.quantidade = 1;
        carrinho.push(produto);
      }
  
      this.setState({ carrinho });
      
    };

    removeProdutoCarrinho = (produtos) => {

      // console.log('id do produto carrinho', produtos.id)
      
    const mapeamentoCarrinho = this.state.carrinho.filter((carrinhoID) => {

    const carrinho1 = this.state.carrinho
      
        if(produtos.id === carrinhoID.id){
  
          return(
            // console.log(produtos.quantidade,'funcionei', this.state.carrinho),
            produtos.quantidade = (produtos.quantidade - 1),
            this.setState(carrinho1)
            
            )    
          }
          // if(produtos.quantidade === 0){
          //   console.log('chegou a 0')

          // }
        
      })

    }


    inputValorMaximo = (e) => {

      if(e.target.value !== ""){

        this.setState({
        inputValorMax: e.target.value
      });}
      
      else{
        this.setState({
          inputValorMax: Infinity
        })
      }}
  
    inputValorMinimo = (e) => {

      this.setState({
        inputValorMin: e.target.value,
      });
  

    }

  inputValorMinimo = (e) => {
    this.setState({
      inputValorMin: e.target.value,
    });
  };

  inputBuscaNome = (e) => {
    this.setState({
      inputBusca: e.target.value,
    });
  };

  mudancaOrdenacao = (e) => {
    this.setState({ ordenacao: e.target.value });
    this.state.ordenacao === "valor-crescente"
      ? this.ordenacaoCres()
      : this.ordenacaoDesc();
  };

  ordenacaoCres() {
    this.setState((prevState) => {
      this.state.produtos.sort((a, b) => b.preco - a.preco);
    });
  }

  ordenacaoDesc() {
    this.setState((prevState) => {
      this.state.produtos.sort((a, b) => a.preco - b.preco);
    });
  }

  render() {
    // RESPONSAVEL PELA RENDERIZAÇÃO NA PARTE DO CARRINHO

    const listaProdutosAdicionados = this.state.carrinho.map(
      (produtos, index) => {

        return (
          <div key={index}>

            <p> quantidade: {produtos.quantidade}  </p>
            <p> {produtos.nome}</p>   
          
          <p>{produtos.preco}</p> 
          <button onClick={() => this.removeProdutoCarrinho(produtos)} >Remover Produtos</button>

          </div>
        );
      }
    );

    const filtragem = this.state.produtos.filter((dados) => {
      if (
        dados.nome
          .toLowerCase()
          .includes(this.state.inputBusca.toLowerCase()) &&
        dados.preco >= this.state.inputValorMin &&
        dados.preco <= this.state.inputValorMax
      ) {
        return dados;
      }
    });

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
            <select
                  onChange={this.mudancaOrdenacao}
                  name="ordenacao"
                  id="ordenacao"
                >
                  <option value="valor-crescente">Crescente</option>
                  <option value="valor-decrescente">Decrescente</option>
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
          <button onClick={()=>this.retornaProdutosCarrinho(produtos)}>Adicionar</button>
        </div>
        )
    })}
           
          </div>
        </section>

        <section className="sect-carrinho">
          <div>
            <p>carrinho</p>
            {listaProdutosAdicionados} 

          </div>
        </section>
      </main>

      <footer>Eu sou o footer</footer>
    </div>
    )
  }
}
