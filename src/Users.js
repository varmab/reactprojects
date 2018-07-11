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
        this.searchUsers=this.searchUsers.bind(this);
    }

    searchUsers(){
        var term=this.refs.search.value;
        console.log(term)
        this.getUsers(term);
    }

    getUsers(searchTerm){
        console.log(searchTerm)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((users)=>{
            console.log(users);

            if(searchTerm){
                users=users.filter((user)=>{
                    console.log(user.name.indexOf(searchTerm))
                    return user.name.indexOf(searchTerm)!=-1;
                })
                console.log(users);
            }

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
                    <input type="text" ref="search"/><button onClick={this.searchUsers}>Search</button>
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