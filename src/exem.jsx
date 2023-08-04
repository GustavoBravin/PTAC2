
export function Exemplo({lista}) {
return(
    <div>
       {lista.map(aluno=>(
        <ul>
             <li>{aluno}</li>
        </ul>
       ))}
     
    </div>
);
}