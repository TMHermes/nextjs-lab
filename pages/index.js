import { useState } from 'react';
import Pessoa from '../components/pessoa.js';
import comAutorizacao from '../hoc/comAutorizacao.js';

function Home() {
  let [idadeTiago, setIdadeTiago] = useState(16);
  const pessoas = [
    {
      nome: 'Beatriz',
      idade: 26
    },
    {
      nome: 'Gabriel',
      idade: 14
    },
    {
      nome: 'Italo',
      idade: 67
    }
  ];

  const incrementaIdadeTiago = () => {
    setIdadeTiago(++idadeTiago);
  }

  return (
    <>
    <h1>Ola Mundo {process.env.NEXT_PUBLIC_TESTE}</h1>
    <Pessoa nome='Tiago' idade={idadeTiago}/>
    <Pessoa nome='Dô' idade={25}/>

    {pessoas.map(({ nome, idade }, index) => {
    return <Pessoa 
      nome ={nome} 
      idade={idade}
      key={index}
    />
    })}

    <button onClick={incrementaIdadeTiago}>Incrementa idade do Tiago</button>
    </>
  ) 
}

export default comAutorizacao(Home);
