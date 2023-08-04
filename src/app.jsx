import './app'
import { Exemplo } from "./exem";
export default function App() {
  const listaalunos = ["Bravin, 16 anos, Mora em Batayporã","Maria, 16 anos, Mora em Nova Andradina","Gustavo, 16 anos, Mora na Favela","Marielle, 16 anos, Mora em Nova Andradina"]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista= {listaalunos}/>
      </div>
  
    );
  }