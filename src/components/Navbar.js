import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="options">
                <p>Iniciar sesión</p>
                <p>Registrarse</p>
            </div>
            <div className="selector">
                <div className="divider-gray"></div>
                <div className="divider-blue"></div>
                <div className="divider-gray"></div>
            </div>
        </div>
    );
};

export default Navbar;