import React from 'react';

const Modal = ({deleteUser, setIsModalOpen, isSelectedId}) => {

    const styles = {
        position: "absolute",
        width: "100%",
        height: "100vh",
        background: "rgba(0,0,0, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20
    }

    const subStyles = {
        width: "50%",
        height: "200px",
        background: "rgba(255, 70, 70, 0.9)",
        textAlign: "center",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    return (
        <div style={styles}>
          <div style={subStyles}>
            <h2 className='modal-title' >¿Seguro desea eliminar este usuario?</h2>
            <div className="modal-buttons">
                <button
                    className='modal-accept'
                    onClick={() => deleteUser(isSelectedId)}
                >
                    Aceptar
                </button>
                <button
                    className='modal-cancel'
                    onClick={() => setIsModalOpen(false)}
                >
                    Cancelar
                </button>
            </div>
          </div>
        </div>
    );
};

export default Modal;