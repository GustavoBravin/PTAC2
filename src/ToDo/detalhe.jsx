import { useParams } from "react-router-dom"
import Card from '../Componentes/Card'

export default function Detalhe(){

    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))
    const nome = lista.filter((objeto) => {
        if(objeto.id == id){
  return objeto;
        }
    return null;
    })
console.log(nome)

return(
<div>
 <Card  atividade={nome[0]}/>
</div>

)


}