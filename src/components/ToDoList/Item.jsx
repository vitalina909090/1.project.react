import React, {useState} from 'react';
import classNames from 'classnames';

const Item = ({ item, removeTask, toggleDone, changeTitle }) => {
    const [isChecked, setIsChecked] = useState(item.done);
    const [isEditable, setIsEditable] = useState(false);
    const [titleError, setTitleError] = useState(null);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        toggleDone(item.id);
    }

    const handleSave = (e) => {
        if (e.target.value.trim() === '') {
            setTitleError('Строка не должна быть пустой');
            setIsEditable(false);
            return;
        }

        changeTitle(item.id, e.target.value);
        setIsEditable(false);
    }

    if (isEditable)
        return (
            <input
                type="text"
                defaultValue={item.title}
                autoFocus
                onBlur={handleSave}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSave(e);
                }}
            />
        )
    else
        return (
            <div>
                <div className="item">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChecked}
                    />

                    <span className={classNames('task-title', { 'done': item.done })} onClick={() => { setIsEditable(true); setTitleError(null); }}>
                        {item.title}
                    </span>

                    <button className='remove-btn' onClick={() => removeTask(item.id)}>
                        Delete
                    </button>
                </div>

                {titleError && <div style={{ color: 'red', fontSize: '.9em' }}>{titleError}</div>}
            </div>
        );
}

export default Item;