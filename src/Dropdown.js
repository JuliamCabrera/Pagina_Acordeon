import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleToggle}>{title}</div>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.subitems ? (
                  <Dropdown title={item.title} items={item.subitems} />
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
