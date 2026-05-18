import React, {useState} from 'react';
import './ToDoList.css'
import ToDoFormAdd from './ToDoFormAdd';
import Filters from './Filters';
import Item from './Item';
import items from './data';
import { nanoid } from 'nanoid'

const ToDoList = () => {
    const [tasks, setTasks] = useState(items);

    const addTask = (value) => {
        setTasks([...tasks,
            {
                id: nanoid(),
                title: value,
                done: false
            }
        ]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    }

    const toggleDone = (id) => {
        setTasks(tasks.map(item => {
            if (item.id === id) {
                return { ...item, done: !item.done };
            }
            return item;
        }));
    };

    const changeTitle = (id, title) => {
        setTasks(tasks.map(item => {
            if (item.id === id) {
                return { ...item, title: title };
            }
            return item;
        }));
    };

    return (
        <div className='container-todo'>
            <h1>TODO LIST</h1>

            <ToDoFormAdd addTask={addTask} />

            <div className="todo">
                <Filters />

                <div className="list">
                    {tasks.map(item =>
                        <Item
                            item={item}
                            key={item.id}
                            removeTask = {removeTask}
                            toggleDone = {toggleDone}
                            changeTitle = {changeTitle}
                        />
                    )}
                </div>  
            </div>
        </div>
    );
}

export default ToDoList;