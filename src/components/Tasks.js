
import Task from './Task'
// {task} destructuring  o props.tasks
const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            { tasks.map( (task) => 
             {
                 return(<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)
             
             })}
        </>
    )
}

export default Tasks
