import React, { useState } from 'react';
import Produto from './Components/Produtos/Produtos';
import './App.css';

const arrayProdutos = [
  {
    id: 1,
    imagem:
      'https://picsum.photos/200/300.webp',
    nome: 'Nave espacial',
    preco: 100,
  },
  {
    id: 2,
    imagem:
      'https://picsum.photos/200/300.webp',
    nome: 'Estação Espacial',
    preco: 200,
  },
  {
    id: 3,
    imagem:
      'https://picsum.photos/200/300.webp',
    nome: 'Veiculo Exploração',
    preco: 300,
  },
  // {
  //   id: 4,
  //   imagem:
  //     'https://picsum.photos/200/300.webp',
  //   nome: 'Foguete',
  //   preco: 150,
  // },
  // {
  //   id: 5,
  //   imagem:
  //     'https://picsum.photos/200/300.webp',
  //   nome: 'Capsula Espacial',
  //   preco: 500,
  // },
  // {
  //   id: 6,
  //   imagem:
  //     'https://picsum.photos/200/300.webp',
  //   nome: 'Satelite',
  //   preco: 600,
  // },
  // {
  //   id: 7,
  //   imagem:
  //     'https://picsum.photos/200/300.webp',
  //   nome: 'Espada Espacial',
  //   preco: 500,
  // },
  // {
  //   id: 8,
  //   imagem:
  //     'https://picsum.photos/200/300.webp',
  //   nome: 'Robô Espacial',
  //   preco: 300,
  // },
  // {
  //   id: 9,
  //   imagem:
  //     'https://picsum.photos/200/300.webp',
  //   nome: 'Kit Astronauta',
  //   preco: 100,
  // },
];

const App = () => {
  const [selecao, setSelecao] = useState('valor-crescente');
  console.log('selecao', selecao);

  const produtos = arrayProdutos.map((produto) => (
    <Produto key={produto.id} caracteristicas={produto} />
  ));


  
  return (
    <div className='div-container'>
      <header>Eu sou header</header>

      <main>
        <section className='sect-filtro'>
          <div>
            <h4>Filtros</h4>
            <p>Valor minimo</p>
            <input type='number' min='0'></input>
            <p>Valor maximo</p>
            <input type='number' min='0'></input>
            <p>Buscar por nome</p>
            <input></input>
          </div>
        </section>

        <section className='sect-produtos'>
          <div className='div-filtragem'>
            <p>Quantidade de produtos:</p>

            <div className='div-ordenacao'>
              <p>Ordenação:</p>
              <select
                value={selecao}
                onChange={(event) => setSelecao(event.target.value)}
                name='ordenacao'
                id='ordenacao'
              >
                <option value='valor-crescente'>Crescente</option>
                <option value='valor-decrescente'>Decrescente</option>
              </select>
            </div>
          </div>

          <div className='div-produtos'>
            {produtos}</div>
        </section>

        <section className='sect-carrinho'>
          <div></div>
        </section>
      </main>

      <footer>Eu sou o footer</footer>
    </div>
  );
};

export default App;