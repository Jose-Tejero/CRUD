import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';
import Navbar from './components/Navbar';

function App() {

  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  },[]);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }

  const selectUser = user => setUserSelected(user);

  const deselectUser = () => setUserSelected(null);

  return (
    <div className="App">
      <div className="form">
        <Navbar />
        <UserForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} />
      </div>
      <div className="users">
        <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />
      </div>
    </div>
  );
}

export default App;
