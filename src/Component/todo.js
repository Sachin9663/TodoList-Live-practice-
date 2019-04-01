import React,{Component} from "react";
import './todo.css';

class TodoItems extends Component {
    constructor(props){
        super(props);
            this.createTasks=this.createTasks.bind(this)
        }

    delete(key){
        this.props.delete(key);
    }
    createTasks(item) {
        return <div className='task'>
            <div>
                <input type='checkbox' key={item.key} className='strikethrough'/>
                <label>{item.text}</label>
            </div>
            <div>
                <input type='button' value='delete' onClick={()=>this.delete(item.key)}/>
            </div>
        </div>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems= todoEntries.map(this.createTasks);
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
};


export default TodoItems;