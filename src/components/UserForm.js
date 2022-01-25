import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
}

const UserForm = ({getUsers, userSelected, deselectUser}) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (userSelected) {
            console.log(userSelected)
            reset(userSelected);
        } else {
            reset(defaultValues);
        }
    },[userSelected, reset])

    const submit = user => {
        console.log(user);
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => {
                getUsers();
                deselectUser();
            });
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers());
        }
        reset(defaultValues);       
    }

    return (
        <form className='user-form' onSubmit={handleSubmit(submit)} >
            <div className="input-container">
                <label htmlFor="firstname">Nombre</label>
                <input 
                    type="text"
                    id='firstname'
                    placeholder='Nombre'
                    required
                    {...register("first_name")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="lastname">Apellido</label>
                <input
                    type="text"
                    id='lastname'
                    placeholder='Apellido'
                    required
                    {...register("last_name")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="email">Correo</label>
                <input
                    type="text"
                    id='email'
                    placeholder='Correo'
                    required
                    {...register("email")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id='password'
                    password='true'
                    placeholder='Contraseña'
                    required
                    {...register("password")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input
                    type="date"
                    id='birthday'
                    {...register("birthday")}
                />
            </div>
            <button>Enviar</button>
            {
                userSelected ? (
                    <button type='button' onClick={deselectUser} >Borrar campos</button>) : (null)
            }
        </form>
    );
};

export default UserForm;