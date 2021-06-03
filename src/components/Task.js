import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        // si task.reminder es verdadero ,la clase es reminder, sino la clase es vacia 
        <div className={`task ${task.reminder ? 'reminder':'' }`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <small>{task.day}</small>
        </div>
    )
}

export default Task
