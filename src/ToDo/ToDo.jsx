import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
  const [atividade,setAtividade] = useState("");
  const [bola,setBola] = useState("");
  const [preço,setPreço] = useState("");
  const [lista,setLista] = useState([]);
 const [id,setId] = useState(1);
   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista,{
        preço: preço,
        bola: bola,
        atividade: atividade,
        id: id
    }]);
    setId(id+1);
    setAtividade("");
    setBola("");
    setPreço("");
    console.log(lista)
   };
    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atvidades</h1>
            <p>{atividade}</p>
            <div className="flex-conteiner">
            <form onSubmit={salvar}> 
            <p><strong>Marca</strong></p>
      <input type="text" value={atividade} 
      onChange={(e) =>{setAtividade(e.target.value)}} />
        <p><strong>Esporte</strong></p>
        
        <input type="text" value={bola} 
      onChange={(e) =>{setBola(e.target.value)}} />
    
       <p><strong>Preço</strong></p>
        <input type="text" value={preço} 
      onChange={(e) =>{setPreço(e.target.value)}} />
      &emsp;
        <button>Adicionar</button>
        </form>
        </div>
        {lista.map((ativ) => 
            <div key = {ativ.id}>
           <p>{ativ.atividade}</p>
           <p>{ativ.bola}</p>    
           <p>{ativ.preço}</p>    


        </div>
    )}
    </div>
    );
}

















