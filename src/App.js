import React, { useState} from "react"




function App() {
  const [todo, setTodo] = useState([]);
  const [thing, setThing] = useState("");


  const change = (e) => {
    e.preventDefault();
    setThing(e.target.value)
    
  }
  const add = () => {
    setTodo([...todo, thing])
  }

  const deleteTask = i => {
    console.log("borrando " + i);
    todo.splice(i, 1);
    setTodo([...todo]);
  }



  return (
    <>





      <div className="input-group mt-4 w-50 m-auto">

        <button onClick={add} className="btn btn-outline-secondary" type="button" id="button-addon1">Agregar</button>

        <input onChange={change} type="text" className="form-control " placeholder="" aria-label="Agregar a la lista" aria-describedby="button-addon1" />
        <h1>Todo List</h1>

      </div>
      <div className='col-6 m-auto'>
        <button onClick={deleteTask} className="btn btn-outline-danger">Eliminar</button>
      </div>
      <ul>{todo.map((item, i) => (
        <li>
          <h3 key={i}> {item}</h3>
        </li>
      ))}</ul>




    </>
  );
}

export default App;
