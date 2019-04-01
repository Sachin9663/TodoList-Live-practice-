import React,{Component} from "react";
import TodoItems from './todo.js';
import './action.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };

        this.addItem=this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== " ") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }
    render() {
        return(
            <div className="Content">
                <div className='container1'>
                    <form onSubmit={this.addItem}>
                        <input ref={(a)=>this._inputElement=a}
                               type='text'
                               placeholder='Enter your task Here'
                        />
                        <button type='submit'>Submit</button>

                    </form>
                    <TodoItems entries={this.state.items}
                               delete={this.deleteItem}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;