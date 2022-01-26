import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {

  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isSelectedId, setIsSelectedId ] = useState(-1);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  },[]);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }

  const deleteUser = id => {
    setIsModalOpen(false);
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }

  const selectUser = user => setUserSelected(user);

  const deselectUser = () => setUserSelected(null);

  return (
    <div className="App">
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} deleteUser={deleteUser} isSelectedId={isSelectedId} />}
      <div className="form">
        <Navbar />
        <UserForm
          getUsers={getUsers}
          userSelected={userSelected}
          deselectUser={deselectUser}
        />
      </div>
      <div className="users">
        <UsersList
          users={users}
          selectUser={selectUser}
          setIsModalOpen={setIsModalOpen}
          setIsSelectedId={setIsSelectedId}
        />
      </div>
    </div>
  );
}

export default App;
