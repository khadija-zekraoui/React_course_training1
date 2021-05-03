import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="container mt-5">
      <h1>Comentarios</h1>
      <hr/>
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Lina'
        texto='comentario 5'
      />

      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Luna'
        texto='comentario 4'
      />

      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Sol'
        texto='comentario 3'
      />
    </div>
  );
}

export default App;
