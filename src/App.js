
import { useState } from "react";

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css';


function App() {

const[showAddTask,setShowAddTask] = useState
(false)

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


/*
addTask:
*/
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id , ...task}
  setTasks([...tasks, newTask])
  console.log(newTask)
}

/* 
deleteTask:
  se filtrará desde el arreglo de las tareas la taréa cual su id sea diferente al que se esta mostrando 
*/
const deleteTask = (id) =>{
  console.log('delete',id)
  setTasks(tasks.filter((task) => task.id !== id))
} 
/*
toggleReminder:
  map copia todo el arreglo y en la tarea que tiene igual el id al que se le hizo doble clic cambiamos el estado de 'reminder' al inverso 
*/
const toogleReminder = (id) =>{
  console.log('toogle',id)


  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="App container">      
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {/*
    si showaddTask es verdadero muestra AddTask sino no  
    showAddTask le pasamos showAddTask
    
    */}
      {showAddTask && <AddTask onAdd={addTask}/>}
    {/*Si el largo del arreglo de tareas es mas largo que 0, muestra la tarea , sino muestra el mensaje  */}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} />)
        : ('No hay tareas que mostrar' )
    }
    </div>
  );
}

export default App;



