import React from 'react';

const Modal = ({deleteUser, setIsModalOpen, isSelectedId}) => {
    return (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: "50%",
              height: "50%",
              background: "rgba(255, 70, 70, 0.9)",
              textAlign: "center",
              borderRadius: "20px"
            }}
          >
            <h2>¿Seguro desea eliminar este usuario?</h2>
            <button onClick={() => {deleteUser(isSelectedId)}}>Aceptar</button>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </div>
    );
};

export default Modal;