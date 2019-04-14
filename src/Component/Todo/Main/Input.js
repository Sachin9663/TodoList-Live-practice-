import React, {Component} from 'react';
import './Main.css';

class Input extends Component {
    render() {
        const{item, handleChange, handleSubmit, editItem}=this.props
        return (
            <div className='Input'>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                           placeholder='Add Task Here'
                           value={item}
                           onChange={handleChange}
                            required
                    />
                    <button type='submit' >{editItem ? 'Edit Task' : 'Add Task'}</button>
                </form>
                <div className='brainy-text'>
                    <p>Each morning sees some task begun,
                        each evening sees it close;
                        Something attempted, something done,
                        has earned a night's repose.
                        <i className="far fa-smile"></i>
                        </p>
                </div>
            </div>
        );
    }
}

export default Input;