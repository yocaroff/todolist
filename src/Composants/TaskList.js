import React, { useState } from 'react';
import Task from '../Utils/Task';

function TaskList({ addTask, list, deleteTask, updateTask, updateAll, allSelected, deleteAll }) {
    const [inputValue, setInputValue] = useState();
    
    function valid(){
        if(inputValue){
            addTask(new Task(inputValue));
            setInputValue('');
        }
    }

    return (
        <div className='tasklist-container'>
            <div className='task-form'>
                <input type="text" name="task-input" id="task-input" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button className='add-button' onClick={valid}>Add Task</button>
            </div>
            <div className='tools-container'>
                <div>
                    <input type='checkbox' id='all-selected' checked={allSelected} onChange={updateAll}/>
                    <span>Select All</span>
                </div>
                <button className={[...list].filter(elt => elt.isDone).length > 0 ? 'delete-all' : 'hidden'} onClick={() => deleteAll()}>+</button> 
            </div>

            { list.length > 0 && ( 
                    <ul className='tasklist'>
                        {list.map((item, index) => (
                            <li key={item.id} className={item.isDone ? 'done' : 'task'}>
                                <form><input type='checkbox' id={item.id} checked={item.isDone} onChange={() => updateTask(item)}/></form>
                                {index+1 + ' : ' + item.name}
                                <div className='button-container'>
                                    <button className={item.isDone ? 'delete' : 'hidden'} onClick={() => deleteTask(item)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
            )}
            
            { list.length === 0 && (
                <div className='no-task'>
                    <h5>Aucune tâche à afficher</h5>
                </div>
            )}

        </div>
        
    )
}


export default TaskList;