import React, {Component} from 'react';
import Input from './Input';
import List from './List';
import './Main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            item:'',
            editItem:false,
            id:Date.now()
        }
    }

    handleChange=(e)=>{
        this.setState({
            item:e.target.value
        })

    }

    handleSubmit=(e)=>{
        e.preventDefault();

        const newItem={
            id:this.state.id,
            title:this.state.item
        };
        console.log(newItem);

        const updateItems=[...this.state.items, newItem];

        this.setState({
            items:updateItems,
            item:'',
            id:Date.now(),
            editItem:false
        })
    };

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    };

    handleEdit = (id) =>{
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItems = this.state.items.find(item => item.id === id);

        console.log(selectedItems);


        this.setState({
            items: filteredItems,
            item: selectedItems.title,
            editItem: true,
            id: id
        })
    }


    render() {
        return (
            <div className='Main'>
                <List items={this.state.items}
                          handleDelete = {this.handleDelete}
                          handleEdit = {this.handleEdit}/>

                <Input item={this.state.item}
                       handleChange={this.handleChange}
                       handleSubmit={this.handleSubmit}
                       editItem={this.state.editItem}
                />
            </div>
        );
    }
}

export default Main;