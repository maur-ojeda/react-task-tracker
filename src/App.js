
import { useState } from "react";

import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css';


function App() {

//set state on top level
  const [tasks, setTasks] = useState(
    [
         {
             id: 1,
             text:'Cita con el doctor',
             day: '01-01-2015',
             reminder: true
         },
         {
             id: 2,
             text:'Dentista',
             day: '01-01-2015',
             reminder: true
         },
         {
             id: 3,
             text:'Hacer ejercicio',
             day: '01-01-2015',
             reminder: true
         },{
             id: 4,
             text:'Meditar',
             day: '01-01-2015',
             reminder: true
         },
         {
             id: 5,
             text:'Comida saludable',
             day: '01-01-2015',
             reminder: true
         }
     
     ]
     
     
 )

const deleteTask = (id) =>{
  console.log('delete',id)
}


  return (
    <div className="App container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;



