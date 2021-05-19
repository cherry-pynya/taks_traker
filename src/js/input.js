import React from 'react';
import TaskData from './taskObj';
import updateStorage from './updateStorage';
import getData from './getStorageData';
import checkMatch from './checkMatch';

export default class Input extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        const arr = getData();
        const result = [];
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].pinned) {
                result.push(arr[i]);
            }
            if (!arr[i].pinned) {
                const check = checkMatch(event.target.value, arr[i].value);
                if (check) {
                    result.push(arr[i]);
                }
            }
        }
        this.props.handler(result);
      }
    
    handleSubmit(event) {
      const arr = getData();
      const note = new TaskData(this.state.value);
      arr.push(note);
      const a = updateStorage(arr);
      this.setState({value: ''});
      this.props.handler(a);
      event.preventDefault();
    }

    render () {
        return (
            <form className='input-form' onSubmit={this.handleSubmit}>
                <input className='input' onChange={this.handleChange} value={this.state.value}></input>
            </form>
        )
    }
}