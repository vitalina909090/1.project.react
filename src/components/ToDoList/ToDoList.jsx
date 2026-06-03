import React, {useEffect, useState, useReducer, useCallback} from 'react';
import './ToDoList.css'
import ToDoFormAdd from './ToDoFormAdd';
import Filters from './Filters';
import Item from './Item';
import items from './data';
import Modal from '../modal/Modal';
// import { nanoid } from 'nanoid';
import TaskReducer, { TaskActionTypes } from '../../reducers/TaskReducer';


const filtersData = {
    all: () => true,
    done: (item) => item.done,
    "todo task": (item) => !item.done
};

const ToDoList = () => {
    const [tasks, dispatch] = useReducer(TaskReducer, items);

    const [activeFilter, setActiveFilter] = useState('all')
    const [visibleModal, setVisibleModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('tasks');
        if (data) {
            dispatch({
                type: TaskActionTypes.FILL_TASKS,
                payload: JSON.parse(data)
            })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const setModalData = useCallback((task) => {
        setVisibleModal(true);
        setCurrentTask(task);
    }, []);


    const addTask = useCallback((value) => {
        dispatch({
            type: TaskActionTypes.ADD_TASK,
            payload: value
        });
    }, []);

    const removeTask = useCallback((id) => {
        dispatch({
            type: TaskActionTypes.REMOVE_TASK,
            payload: id
        });
    }, []);

    const toggleDone = useCallback((id) => {
        dispatch({
            type: TaskActionTypes.TOGGLE_DONE,
            payload: id
        });
    }, []);

    const changeTitle = useCallback((id, title) => {
        dispatch({
            type: TaskActionTypes.CHANGE_TITLE,
            payload: { id, title }
        });
    }, []);

    return (
        <div className='container-todo'>
            <h1>TODO LIST</h1>

            <ToDoFormAdd addTask={addTask} />

            <div className="todo">
                <Filters 
                    setActiveFilter={setActiveFilter} 
                    activeFilter={activeFilter}
                    filtersData = {filtersData} 
                />

                <div className="list">
                    {tasks.filter(filtersData[activeFilter]).map((item) => (
                        <Item
                            item={item}
                            key={item.id}
                            removeTask = {removeTask}
                            toggleDone = {toggleDone}
                            changeTitle = {changeTitle}
                            setModalData = {setModalData}
                        />
                    ))}
                </div>  
            </div>

            <Modal 
                visible={visibleModal} 
                onClose={() => setVisibleModal(false)} 
            >
                <h1>Modal</h1>
                <p>{currentTask?.title}</p>
            </Modal>
        </div>
    );
}

export default ToDoList;
