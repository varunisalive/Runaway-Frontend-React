import React from "react";
import "./Modal.css";

const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleChange = (event) => {
        if(event.target.classList.contains("backdrop")){
            setSelectedImage(null);
        }
    }

    return(
        <div className="backdrop" onClick={handleChange}>
            <img className="modal-img" src={selectedImage} alt="fullscreen-img"/>
        </div>
    );
}

export default Modal;