// src/components/Modal.js
import React, { useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ setIsModalOpen }) => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="modal" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setIsModalOpen(false)}>
          &times;
        </span>
        <div className="tab-header">
          <div
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Login
          </div>
          <div
            className={activeTab === 'signup' ? 'active' : ''}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </div>
        </div>
        {activeTab === 'login' ? (
          <div className="tab-content active">
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <div className="tab-content active">
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="date" placeholder="Date of Birth" required />
              <select required>
                <option value="" disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input type="text" placeholder="Area" required />
              <input type="tel" placeholder="Contact Number" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;