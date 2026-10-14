import React, {useState} from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// CSS
import syles from './App.module.css';

// Interfaces
import { Itask } from './interfaces/Itask';

function App() {
  const [taskList, setTaskList] = useState<Itask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Itask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    );
  };

  const hiderOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if (display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  };

  const editTask = (task: Itask): void => {
    hiderOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: Itask = { id, title, difficulty }
    
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    })

    setTaskList(updatedItems);

    hiderOrShowModal(false);
  };

  return (
    <div>
      <Modal children={<TaskForm
        btnText="Editar Tarefa"
        taskList={taskList}
        task={taskToUpdate}
        handleUpdate={updateTask}/>}
      />
      <Header />
      <main className={syles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
