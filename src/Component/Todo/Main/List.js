import React, {Component} from 'react';
import Item from './Item';
import './Main.css';

class List extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit}=this.props;
        return (
            <div className='List'>
                <h2>Your task is here . . .</h2>
                {items.map(item=> {
                        return <Item
                            key={item.id}
                            title={item.title}
                            handleDelete = {()=>handleDelete(item.id)}
                            handleEdit = {()=>handleEdit(item.id)}
                        />
                    })}
            </div>
        );
    }
}

export default List;