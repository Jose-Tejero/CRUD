import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faEnvelope, faTrash, faUserAlt, faUserEdit} from '@fortawesome/free-solid-svg-icons'

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='cards-container'>
            {
                users.map(user => (
                    <div key={user.id} className='card' >
                        <div className="datas">
                            <h3><FontAwesomeIcon icon={faUserAlt} /> {user.first_name} {user.last_name}</h3>
                            <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
                            <p><FontAwesomeIcon icon={faBirthdayCake} /> {user.birthday}</p>
                        </div>
                        <div className="edit-delete">
                            <button className='edit' onClick={() => selectUser(user)} style={{color: 'green'}}>
                                <FontAwesomeIcon icon={faUserEdit} />
                                <span class="tooltiptext-edit">Editar usuario</span>
                            </button>
                            <button className='delete' onClick={() => deleteUser(user.id)} style={{color: 'red'}} >
                                <FontAwesomeIcon icon={faTrash} />
                                <span class="tooltiptext-delete">Eliminar usuario</span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;