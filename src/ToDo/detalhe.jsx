import { useParams } from "react-router-dom"
import Card from '../Componentes/Card'

export default function Detalhe(){

    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))
    const Lista = lista.filter((objeto) => {
        if(objeto.id == id){
  return objeto;
        }
    return null;
    })
console.log(Lista)

return(
<div>
 <Card  atividade={lista[id-1]}/>
</div>

)


}