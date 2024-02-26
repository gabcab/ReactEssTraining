import { useState, useEffect } from 'react';


function Hooksss() {
  //useState: Retorna un arreglo con un valor y una función, se usa mayormente para eventos onClick, obtener valores en forms...
  const [emotion, setEmotion] = useState("Happy");

  //UseEffect: usado para detectar efectos secundarios que tienen que ver con cambios en un componente. 
  //En el array secundario se le puede colocar que varias variables o en blanco para que solo lo haga una vez
  useEffect( () => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  return (
    <div className="App">
          <h1>My emotion is {emotion}</h1>
          <button onClick={()=> setEmotion("Sad")} >SAD</button>
          <button onClick={()=> setEmotion("Angry")} >Angry</button>
    </div>
  );
}

export default Hooksss;