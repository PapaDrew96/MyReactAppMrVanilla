import React from 'react';
import './StatusIndicator.css'; // Assume you create a corresponding CSS file for styles

const statusConfig = {
  success: { color: 'green', icon: '✔️', text: 'Completed' },
  warning: { color: 'orange', icon: '⚠️', text: 'Pending' },
  error: { color: 'red', icon: '❌', text: 'Error' },
  info: { color: 'blue', icon: 'ℹ️', text: 'In Progress' },
};

const StatusIndicator = ({ status = 'info', label }) => {
  const { color, icon, text } = statusConfig[status] || statusConfig.info;

  return (
    <div className="status-indicator" style={{ borderColor: color }}>
      <span style={{ color }}>{icon}</span>
      <span style={{ color }}>{label || text}</span>
    </div>
  );
};

export default StatusIndicator;
