import { React } from './lib/react';

export default function App(props) {
  return (
    <section className="App">
      <h1>Contador</h1>
      <div>
        <div>0</div>
        <button>Incrementar</button>
        <button>Decrementar</button>
      </div>
    </section>
  );
}
