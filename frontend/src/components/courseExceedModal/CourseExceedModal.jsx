import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./CourseExceedModal.css";
import API_BASE_URL from "../../config.js";

function CourseExceedModal({ isShow, closeHandler }) {
  // close handler
  const handleClose = () => {
    closeHandler();
  };
  return (
    <div
      className={`course-exceed-wrapper ${isShow ? "course-exceed-show" : "course-exceed-hide"
        }`}
    >
      <div className='course-exceed-container'>
        <span onClick={handleClose}>
          <FontAwesomeIcon icon={faX} style={{ color: "#ff0000" }} />
        </span>
        <p style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>You have exceeded your course limit .Please contact kidgage Admin </p>
      </div>
    </div>
  )
}

export default CourseExceedModal