import { React } from './lib/react';
import { css } from '@emotion/css'

import { Button } from './components/button';

const myStyle = css`
  background-color: rebeccapurple;
  color: #fff;
`

export default function App(props) {
  function handleClick() {
    console.log('aqui')
  }
  return (
    <section className={myStyle}>
      <h1>Contador</h1>
      <div>
        <div>0</div>
        <Button texto="Incrementar" onClick={handleClick} />
        <Button texto="Descrementar" />
      </div>
    </section>
  );
}
