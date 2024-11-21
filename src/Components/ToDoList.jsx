import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            completed: false,
        },
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now();
            text,
            completed: false
        };

        setTasks([...tasks, newTasks]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.map(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id = id) {
                return { ...task, completed: !task.completed }
            } else {
                return task;
            }
        }));
    }
    return (
        <div className='to-do list'>
            {
                tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={task}
                        toggleCompleted={toggleCompleted}
                    />
                ))

                < input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => addTask(text)}>Add</button>
}
        </div>
    )
        
  )
}

export default ToDoList
