import React, { Component } from 'react'

export default class Produtos extends Component {

  render() {

    return (
        
    <div>
         <img src={this.props.imagem} alt={this.props.texto}></img>
         <p>{this.props.nomeProduto}</p>
         <p>{this.props.precoProduto}</p>
         <button>Adicionar</button>
    </div>
    )
  }
}
