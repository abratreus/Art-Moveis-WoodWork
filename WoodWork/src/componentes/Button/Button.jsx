import React from 'react';

export default function Button({ variant = "primary", children, onClick, className = "", type = "button" }) {
  const v = `btn btn-${variant}`;
  return (
    <button type={type} className={`${v} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
