import  Card  from "./Components/Card"
import  Footer  from "./Components/Footer"
import  Header  from "./Components/Header"
import  Lista  from "./Components/Lista"

export default function App() {
  
  const tecnologias = ["HTML", "CSS", "JavaScript", "React"];

  return(
    <>
      <Header />

      <main>
        <Card
          titulo="Primeira aplicação React"
          descricao="Aprendendo JSX, componentização e propriedades."
        />

        <Lista itens={tecnologias} />
      </main>

      <Footer />
    </>
  );
}
