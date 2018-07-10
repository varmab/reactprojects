import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }

        this.addTodo=this.addTodo.bind(this);
    }

    addTodo(){
        var todo=this.refs.todo.value;
        console.log(todo);
        this.setState({
            todos:[
                ...this.state.todos,
                todo
            ]
        })
    }


    render(){
        return(
            <div>   
                <h1>Todos</h1>
                <input type="text" ref="todo"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <table>
                    <tr><th>Todo</th></tr>
                    {
                        this.state.todos.map((todo)=>{
                            return <tr key={todo}><td>{todo}</td></tr>
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Todos;