import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"


export default function Ativ() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
   const [tipo, setTipo ] = useState("");
   const [lista, setLista ] = useState(listaLocalStorage || []);
  

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo,

                id: id
        }]);
        setId(id + 1);
        setTipo("");
        console.log(id)
    };
    <ul key={Ativ.id}>
    
<link to={'/detalhe/${Ativ.id}'} >
 <p>{Ativ.tipo}</p>
</link>
<button onClick={() =>
remover(Ativ.id)}>
    Remover
</button>
</ul>
    const remover = (id) => {
        const auxLista = lista.filter((item) => item.id !== id);
        setLista(auxLista);
      }

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de atividade</h1>  
            <div> 
            <form onSubmit={salvar}>
                <p><strong>Tipo:</strong></p>
                &emsp;
            <input value={tipo} type="text"
            onChange={(e)=>{ setTipo(e.target.value)}}/>


            <button>ADD</button>
            </form>   
            </div>    
            {lista.map((ativ)=>
            <div key= {ativ.id}>
                <p>{ativ.tipo}</p>
                <button onClick={() => remover(ativ.id)}>Remover</button>
            </div>
            )} 
        </div>
    );
}


