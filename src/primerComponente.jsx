import { useState } from 'react'

export default function PrimerComp(params) {
    const [count, setCount] = useState(0);
    const [saludo, setSaludo] = useState('Hola');

    function handleClick() {
        if (count < 10) {
            setCount(count + 1);
        } else {
            console.log('El contador no debe pasar de 10');
        }
    }

    function cambiarSaludo() {
        if (saludo == 'Hola') {
            setSaludo("Hola mundo YEAAA!!");
        } else {
            setSaludo("Hola");
        }
    }

    return (
        <>
          {console.log('Hello world')}
          <h1>Primer proyecto con React</h1>
          <h2>{saludo}</h2>
          <div className="card">
            <button onClick={handleClick}>
              count is {count}
            </button>
            <button onClick={cambiarSaludo}>
              Cambiar saludo
            </button>
  
          </div>
  
          {/* <div>
            <FormContacto nombre={"Alfredo"} edad={25} />
          </div> */}
  
          <button onClick={() => setCount(count + 1)} style={{ color: (count > 3) ? 'red' : '' }} >Contador = {count}</button>
  
        </>
      )

}