// import { Component } from 'react';
// import userService from './services/userService.js'


// class App extends Component {
//     state = {
//         fullName: '',
//         users: []
//     }


//     componentDidMount() {
//         this.loadUsers()
//     }


//     loadUsers = async () => {
//         const users = await userService.query()
//         this.setState({ users })
//     }
// }

// with hooks

import { useState, useEffect } from 'react';
import userService from './services/userService.js'

function App() {
    const [users, setUsers] = useState([]);
    const [fullName, setFullName] = useState('');

    const loadUsers = async () => {
        const users = await userService.query();
        setUsers(users);
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <div>
            returning from App
        </div>
    )
}
