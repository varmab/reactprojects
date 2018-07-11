import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loaded:false,
            error:false
        }

        this.getUsers=this.getUsers.bind(this);
    }

    getUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((users)=>{
            console.log(users);
            this.setState({
                users:users,
                loaded:true
            })
        })
        .catch((err)=>{
            console.log(JSON.stringify(err))
            this.setState({
                error:true
            })
        })
    }

    componentDidMount(){
        this.getUsers();
    }

    render(){

        if(this.state.error){
            return(<div>Sorry.. We are unable to show you data</div>)
        }
        
        if(this.state.loaded){
            return(
                <div>
                    <h1>Users</h1>
                    <ul>
                        {
                            this.state.users.map((user)=>{
                                return <li key={user.id}>{user.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
        else
        {
            return(<div>Loading..</div>)
        }
    }
}

export default Users;