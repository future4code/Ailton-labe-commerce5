import React from 'react';
import styled from 'styled-components'



const Produto = ({ caracteristicas }) => {
  return (
    <div>
      <img src={caracteristicas.imagem} alt="imagem"/>
      <p>{caracteristicas.nome}</p>
      <p>R${caracteristicas.preco},00</p>
      <button>Adicionar</button>
    </div>
  );
};

export default Produto;