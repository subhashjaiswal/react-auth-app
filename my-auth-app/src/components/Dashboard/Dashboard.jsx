import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("user_email");

  const handleLogout = () => {
    localStorage.removeItem("pb_token");
    localStorage.removeItem("user_email");
    navigate("/login");
    };  

    const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">⚡</div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <span className="nav-icon">🏠</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📅</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">🎯</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📊</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📋</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">👥</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">💼</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
          </div>
        </nav>
        <div className="sidebar-bottom">
          <div className="nav-item">
            <span className="nav-icon">🔗</span>
          </div>
         </div>
      </div>

      <div className="main-content">
        <header className="top-header">
          <div className="header-left">
            <div className="breadcrumb">
              <span className="breadcrumb-icon">🏠</span>
              <span className="breadcrumb-text">Dashboard</span>
            </div>
            <h1 className="page-title">Platform Dashboard</h1>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search Events..." 
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <div className="header-actions">
              <button className="action-btn secondary">
                <span className="btn-icon">👤</span>
                New Client
              </button>
              <button className="action-btn primary">
                <span className="btn-icon">📋</span>
                New Work Order
              </button>
              <div className="header-icons">
                <button className="icon-btn">⚙️</button>
                <button className="icon-btn">💬</button>
                <button className="icon-btn">🔔</button>
                <div className="user-avatar" onClick={handleLogout} title="Click to logout">
                  <span>👤</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {email && (
          <div className="welcome-section">
            <h2>Welcome!, {email}!</h2>
            <p>Here's what's happening with your projects today.</p>
          </div>
        )}

        <div className="dashboard-content">
          <div className="content-grid">
            {images.map((img, i) => (
              <div key={i} className="content-box image-card">
                <img src={img} alt={`Dashboard item ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
