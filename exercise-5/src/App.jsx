import Card from "./components/Card";
import { PICTURE } from "./data";

function App() {
  return (
    <main className="min-h-screen bg-pink-100 p-8">
      <ul className="places mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
        {PICTURE.map((p) => (
          <Card key={p.id} id={p.id} name={p.name} desc={p.desc} src={p.src} />
        ))}
      </ul>
    </main>
  );
}

export default App;
