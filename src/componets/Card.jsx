import React from 'react'
import "./style.css"
export const Card = ({ icon, title, content }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};
