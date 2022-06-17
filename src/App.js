import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    produtos: [
      {
        id: 1,
        imagem: "https://images-shoptime.b2w.io/produtos/3735642098/imagens/brinquedo-nave-capsula-espacial-com-astronautas-fun-f00241/3735642098_1_large.jpg",
        nome: "Cápsula spacial",
        preco: 100,
      },

      {
        id: 2,
        imagem: "https://images-shoptime.b2w.io/produtos/3968479480/imagens/brinquedo-estacao-espacial-8-em-1-multikids-br1031/3968479480_1_large.jpg",
        nome: "Estação Espacial",
        preco: 199,
      },

      {
        id: 3,
        imagem: "https://images-shoptime.b2w.io/produtos/3735642901/imagens/carro-rover-espacial-astronautas-brinquedo-da-fun-divirta-se/3735642901_1_large.jpg",
        nome: "Veiculo Exploração",
        preco: 300,
      },
      {
        id: 4,
        imagem: "https://images-shoptime.b2w.io/produtos/4182833871/imagens/brinquedo-quebra-cabeca-aventura-espacial-pais-e-filhos-c-28-pecas/4182833871_1_large.jpg",
        nome: "Quebra Cabeça ",
        preco: 110,
      },
      {
        id: 5,
        imagem: "https://images-shoptime.b2w.io/produtos/4959375937/imagens/kit-robo-solar-6-em-1-brinquedo-de-montar-estacao-espacial/4959375937_1_large.jpg",
        nome: "Robo Solar",
        preco: 120,
      },
      {
        id: 6,
        imagem: "https://images-shoptime.b2w.io/produtos/5164107568/imagens/lego-duplo-10944-missao-de-onibus-espacial/5164107621_1_large.jpg",
        nome: "Lego Ônibus Espacial",
        preco: 200,
      },
      {
        id: 7,
        imagem: "https://images-shoptime.b2w.io/produtos/2533905339/imagens/lancador-espacial-hora-da-disputa-com-mascara-le1916-p-unik/2533905355_2_large.jpg",
        nome: "Lançador Espacial",
        preco: 122,
      },
      {
        id: 8,
        imagem: "https://images-shoptime.b2w.io/produtos/3208339951/imagens/lego-creator-robo-de-mineracao-espacial-31115/3208339951_1_large.jpg",
        nome: "Lego Robo Minerador",
        preco:300 ,
      },
      {
        id: 9,
        imagem: "https://images-shoptime.b2w.io/produtos/01/00/img/3549337/3/3549337313_1GG.jpg",
        nome: "Kit - 3 Robos Espaciais",
        preco: 60,
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
          <div className="itensCarrinho" key={index}>

            <p> X{produtos.quantidade} </p>

            <p> {produtos.nome}</p>
            <p>R${produtos.preco}</p>

            <button onClick={() => this.removeProdutoCarrinho(produtos)}>
              Remover
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

        <header>
        <img src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/undefined/external-astronaut-space-tulpahn-outline-color-tulpahn-1.png" alt="icone"></img>
        <h1>AstroBot Store</h1>
        </header>

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
              
            

              <div className="div-ordenacao">

                <p>Ordenação:</p>

                <select
                  onChange={this.mudancaOrdenacao}
                  name="ordenacao"
                  id="ordenacao"
                >
                  <option className="texto-crescente" value="valor-crescente">Crescente</option>

                  <option className="texto-crescente" value="valor-decrescente">Decrescente</option>

                </select>

              </div>

            </div>

            <div className="div-produtos">

              {filtragem.map((produtos) => {
                return (
                  <div className='CardProduto' key={produtos.id}>

                    <img src={produtos.imagem}></img>
                    
                    <p>{produtos.nome}</p>

                    <p>R$ {produtos.preco},00</p>

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
              <h4>Carrinho</h4>
              
              {listaProdutosAdicionados}
              <p>Valor Total: R${this.state.valorTotal}</p>
            </div>

          </section>
        </main>

        <footer>Eu sou o footer</footer>

      </div>
    );
  }
}
