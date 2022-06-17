import React, { Component } from "react";
import "./App.css";

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
      {
        id: 4,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
      {
        id: 5,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
      {
        id: 6,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
      {
        id: 7,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
      {
        id: 8,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
      {
        id: 9,
        imagem: "https://picsum.photos/id/237/200/300",
        nome: "Veiculo Exploração",
        preco: 300,
      },
    ],

    carrinho: [],

    inputValorMax: Infinity,

    inputValorMin: "",
    inputBusca: "",
    quantidade: 0,
    ordenacao: "valor-crescente",
    valorTotal: 0,
  };


  totalCarrinho = () => {
    let somaTotal = 0;

    for (let item of this.state.carrinho) {
      somaTotal += item.preco * item.quantidade;
    }

    this.setState({ valorTotal: somaTotal });
  };

  retornaProdutosCarrinho = (produto) => {
    const carrinho = this.state.carrinho;
    const produtoExiste = carrinho.find((p) => p.id === produto.id);

    if (produtoExiste) {
      produtoExiste.quantidade += 1;
    } else {
      produto.quantidade = 1;
      carrinho.push(produto);
    }

    this.setState({ carrinho });

    {this.totalCarrinho();}
  };

  removeProdutoCarrinho = (produtos) => {
    const mapeamentoCarrinho = this.state.carrinho.filter((carrinhoID) => {

      const carrinho1 = this.state.carrinho;

      if (produtos.id === carrinhoID.id) {
        return (
          (produtos.quantidade = produtos.quantidade - 1),
          this.setState(carrinho1)
        );
      }
    });

    {this.totalCarrinho();}

  };

  inputValorMaximo = (e) => {
    if (e.target.value !== "") {
      this.setState({
        inputValorMax: e.target.value,
      });
    } else {
      this.setState({
        inputValorMax: Infinity,
      });
    }
  };

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
    const listaProdutosAdicionados = this.state.carrinho.map(
      (produtos, index) => {
        if (produtos.quantidade === 0) {
          return null;
        }

        return (
          <div key={index}>

            <p> quantidade: {produtos.quantidade} </p>

            <p> {produtos.nome}</p>
            <p>{produtos.preco}</p>

            <button onClick={() => this.removeProdutoCarrinho(produtos)}>
              Remover Produtos
            </button>

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


    //RENDERIZAÇÃO
  

    return (
      <div className="div-container">

        <header>Eu sou header</header>

        <main>

          <section className="sect-filtro">
            <div>

              <h4>Filtros</h4>

              <p>Valor minimo</p>

              <input
                type={"number"}
                min="0"
                onChange={this.inputValorMinimo}
                value={this.state.inputValorMin}
              ></input>

              <p>Valor maximo</p>

              <input
                type={"number"}
                min="0"
                onChange={this.inputValorMaximo}
                value={this.state.inputValorMax}
              ></input>

              <p>Buscar por nome</p>

              <input
                type={"text"}
                onChange={this.inputBuscaNome}
                value={this.state.inputBusca}
              ></input>

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

                    <button
                      onClick={() => this.retornaProdutosCarrinho(produtos)}
                    >
                      Adicionar
                    </button>

                  </div>
                );
              })}
            </div>

          </section>

          <section className="sect-carrinho">
            
            <div>
              <p>carrinho</p>
              {this.state.valorTotal}
              {listaProdutosAdicionados}
            </div>

          </section>
        </main>

        <footer>Eu sou o footer</footer>

      </div>
    );
  }
}
