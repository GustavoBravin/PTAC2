import './app'
import { Exemplo } from "./exem";
export default function App() {
  const listaalunos = [{nome:"Bravin" , idade:16 , cidade:"Batayporã"}, {nome:"Moniky" , idade:15 , cidade:"Nova Andradina"},{nome:"Anielly" , idade:16 , cidade:"Nova Andradina"}]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista= {listaalunos}/>
      </div>
  
    );
  }