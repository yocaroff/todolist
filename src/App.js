import './App.css';
import TaskList from './Composants/TaskList';
import React, { useEffect, useState } from 'react';
import Task from './Utils/Task'


function App() {

  const [taskList, setTaskList] = useState([
    new Task('Faire les courses'),
    new Task('Sortir la viande du congel')
  ]);
  const [allSelected, setAllSelected] = useState(false);

  function addTask(tache){
    setTaskList([...taskList, tache]);
    alert('Tâche ajoutée');
  }

  function deleteTask(tache){
    setTaskList([...taskList].filter(task => task.id !== tache.id));
    alert('Tâche supprimée');
  }

  function updateTask(tache){
    let local = [...taskList];
        let index = local.findIndex(element => element.id === tache.id);
        local[index].isDone = !local[index].isDone;
        setTaskList(local);
  }

  function updateAll() {
    let local = [...taskList];
    local.forEach(element => {
        element.isDone = !allSelected
    })
    setTaskList(local)
    setAllSelected(!allSelected);
  }

  function deleteAll() {
    // eslint-disable-next-line no-restricted-globals
    let confirmed = confirm('Voulez vous supprimez toutes les tâches sélectionnées ?');
    if(confirmed){
      setTaskList([...taskList].filter(elt => !elt.isDone))
    }  
  }

  useEffect(() => {
    if([...taskList].filter(task => task.isDone).length !== taskList.length){
        setAllSelected(false);
    } else {
        setAllSelected(true);
    }
},[taskList])

  return (
    <div className='app'>
      <h1>ToDo :</h1>
      <TaskList 
        addTask={addTask} 
        deleteTask={deleteTask} 
        updateTask={updateTask} 
        allSelected={allSelected}
        setAllSelected={setAllSelected} 
        updateAll={updateAll} 
        list={taskList}
        deleteAll={deleteAll}
      />
    </div>
  )
}

export default App;
