import React from 'react';
import Input from './input';
import Task from './task';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
        this.handler = this.handler.bind(this)
    }

    handler(arr) {
        this.setState({
            data: arr
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>Top Tasks</h1>
                <Input handler={this.handler} />
                <h2>Pinned:</h2>
                <ul className='list'>
                    {this.state.data.find((a) => {if (a.pinned) return true}) === undefined
                        ? <p>No pined tasks</p>
                        : this.state.data.map((a, index) => {if (a.pinned) return <Task props={a} key={index} handler={this.handler} />})
                    }
                </ul>
                <h2>All Tasks:</h2>
                <ul className='list'>
                    {typeof this.state.data[0] === 'string' && <p>{this.state.data[0]}</p>}
                    {this.state.data.length === 0
                        ? <p>No tasks</p>
                        : this.state.data.map((a, index) => {if (!a.pinned) return <Task props={a} key={index} handler={this.handler} />})
                    }
                </ul>
            </div>
        )
    }
}


