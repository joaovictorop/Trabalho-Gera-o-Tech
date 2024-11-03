import React, { useState } from 'react';
import './Produto.css';

const Produto = () => {
  const [imagemAtual, setImagemAtual] = useState(0);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const breadcrumbs = [
    'Home',
    'Produtos',
    'Tênis',
    'Nike',
    'Tênis Nike Revolution 6 Next Nature Masculino'
  ];

  const produto = {
    nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
    imagens: [
      'https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small',
      'https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small',
      'https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small',
      'https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small',
      'https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small',
    ],
    categoria: 'Casual',
    marca: 'Nike',
    referencia: 'REF: 38416711',
    avaliacao: 4.7,
  };

  const mudarImagem = (index) => {
    setImagemAtual(index);
  };

  return (
    <div className="produto">
      <nav className="breadcrumbs">
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            {item}
            {index < breadcrumbs.length - 1 && ' / '}
          </span>
        ))}
      </nav>

      <div className="produto-details">
        <div className="detalhes-container">
          <div className="imagem-principal">
            <button 
              className="seta" 
              onClick={() => mudarImagem((imagemAtual - 1 + produto.imagens.length) % produto.imagens.length)}
            >
              &#10094;
            </button>
            <img src={produto.imagens[imagemAtual]} alt={produto.nome} />
            <button 
              className="seta" 
              onClick={() => mudarImagem((imagemAtual + 1) % produto.imagens.length)}
            >
              &#10095;
            </button>
          </div>

          <div className="informacoes">
            <h1>{produto.nome}</h1>
            <div className="produto-breadcrumb">
              {produto.categoria} / {produto.marca} / {produto.referencia}
            </div>

            {}
            <div className="avaliacao-container">
              <div className="estrelas">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="estrela"></div>
                ))}
                <div className="estrela estrela-branca"></div>
              </div>
              
              <div className="balao-avaliacao">
                {produto.avaliacao} <div className="estrela"></div>
              </div>
              <span className="texto-avaliacoes">(90 avaliações)</span>
            </div>

            {}
            <div className="preco-container">
              <span className="preco-atual">R$ 219,00</span>
              <span className="preco-antigo">R$ 210,00</span>
            </div>

            {}
            <div className="descricao-container">
              <h3 className="descricao-titulo">Descrição do produto:</h3>
              <p className="descricao-texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {}
            <div className="tamanho-container">
              <h3 className="tamanho-titulo">Tamanho:</h3>
              <div className="tamanhos">
                {[39, 40, 41, 42, 43].map((tamanho) => (
                  <div 
                    key={tamanho} 
                    className={`tamanho-quadrado ${tamanhoSelecionado === tamanho ? 'tamanho-selecionado' : ''}`}
                    onClick={() => setTamanhoSelecionado(tamanho)}
                  >
                    {tamanho}
                  </div>
                ))}
              </div>
            </div>

            {}
            <div className="botao-comprar-container">
              <button className="botao-comprar">Comprar</button>
            </div>
          </div>
        </div>

        <div className="imagem-pequena">
          {produto.imagens.map((imagem, index) => (
            <div
              key={index}
              className={`imagem-quadrado ${index === imagemAtual ? 'ativa' : ''}`}
              onClick={() => mudarImagem(index)}
            >
              <img src={imagem} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produto;
