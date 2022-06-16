import React, { Component } from 'react'
import Produtos from './components/Produtos/Produtos'
import "./App.css";

export default class App extends Component {

    state = {
      carrinho:[]
    }

  render() {

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

            <Produtos/>
           
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
    )
  }
}


