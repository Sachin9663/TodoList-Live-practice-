import React, {Component} from 'react';
import './Main.css';


class Item extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <div className='Item'>
                <ul className='item-list'>
                    <li><input type='checkbox'/></li>
                    <li className='title'>{title}</li>
                    <li onClick={handleEdit} className='edit'><i className="far fa-edit"></i></li>
                    <li onClick={handleDelete} className='delete'><i className="far fa-trash-alt"></i></li>
                </ul>
            </div>
        );
    }
}

export default Item;