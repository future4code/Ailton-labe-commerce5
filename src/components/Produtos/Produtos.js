import React, { Component } from 'react'

export default class Produtos extends Component {

  state = {

    produtos:[
      {
       id: 1,
      imagem:'https://avatars.slack-edge.com/2019-10-08/787705854592_d4dcaa8333ccc0c25ff0_512.png',
      nome: 'Nave espacial',
      preco: 100,
      },

      {
        id: 2,
        imagem:'https://avatars.slack-edge.com/2019-10-08/787705854592_d4dcaa8333ccc0c25ff0_512.png',
        nome: 'Estação Espacial',
        preco: 200,
      },

      {
       id: 3,
        imagem:'https://avatars.slack-edge.com/2019-10-08/787705854592_d4dcaa8333ccc0c25ff0_512.png',
        nome: 'Veiculo Exploração',
        preco: 300,
      },


    ],

    carrinho:[]
  }


  render() {

 const retornaProdutos =   this.state.produtos.map((produtos, index) => {
      return (
        <div key={produtos.id}>
          <img src={produtos.imagem}></img>
          <p>{produtos.nome}</p>
          <p>{produtos.preco}</p>
          <button onClick={this.props.retornaProdutosCarrinho}>Adicionar</button>
        </div>
        )
    })

    return (
        
    <div>
         {retornaProdutos} 
    </div>
    )
  }
}
