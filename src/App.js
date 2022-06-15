import React from "react";
import "./App.css";
import styled from "styled-components";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="div-container">
      <header>Eu sou header</header>

      <main>
        <section className="sect-filtro">
          <div>
            <h4>Filtros</h4>
            <p>Valor minimo</p>
            <input type={"number"} min="0"></input>
            <p>Valor maximo</p>
            <input type={"number"} min="0"></input>
            <p>Buscar por nome</p>
            <input></input>
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
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
            <Produtos
              imagem={"https://picsum.photos/id/237/200/300"}
              texto={"produto1"}
              nomeProduto={"Produto1"}
              precoProduto={300.0}
            />
          </div>
        </section>

        <section className="sect-carrinho">
          <div>
            <h4>Carrinho:</h4>
            <p>Valor total: R$0,00</p>
          </div>
        </section>
      </main>

      <footer>Eu sou o footer</footer>
    </div>
  );
}

export default App;
