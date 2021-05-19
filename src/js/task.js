import React from 'react';
import getData from './getStorageData';
import updateStorage from './updateStorage';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this)
    }

    handleChange() {
        const arr = getData();
        for (let i = 0; i < arr.length; i += 1) {
            if (this.props.props.value === arr[i].value) {
                if (arr[i].pinned) {
                    arr[i].pinned = false;
                } else if (!arr[i].pinned) {
                    arr[i].pinned = true;
                }
            }
        }
        updateStorage(arr)
        this.props.handler(arr);
    }

    clickHandler() {
        const arr = getData();
        for (let i = 0; i < arr.length; i += 1) {
            if (this.props.props.value === arr[i].value) {
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
        updateStorage(arr)
        this.props.handler(arr);
    }
    
    render() {
        return (
            <li className='list-item'>
                <button className='list-item-btn' onClick={this.clickHandler}>X</button>
                <div style={{marginRigt: '5px'}} className='list-item-container'>
                    <p>{this.props.props.value}</p>
                </div>
                <input type='checkbox' onChange={this.handleChange} checked={this.props.props.pinned} className='list-item-input' />
            </li>
        )
    }
}