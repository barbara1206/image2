'use client';

interface PrimeiroComponenteProgs {
  mensagem: string;
  mensagemBotao: string
  //
}

export const PrimeiroComponente = ({mensagem}: PrimeiroComponenteProgs) => { 
  
 // function clique(){
  // console.log("Você clicou no botão!");
  // alert("Você clicou no botão!");
  
   const clique =() => {
   console.log("Você clicou no botão!");
   alert("Você clicou no botão!");
  }

    return(
    <div> 
      <h1>Primeiro Componente</h1>
      <button onClick={clique}>Clique aqui</button>
    </div>
  );
} 