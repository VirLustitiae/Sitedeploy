import React from 'react';

interface LinkButtonProps {
  url: string;
  iconClass: string;
  style?: React.CSSProperties;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, iconClass, style }) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', cursor: 'pointer', ...style }}>
      <i className={iconClass} style={{ fontSize: 30, color: 'whitesmoke' }}></i>
    </button>
  );
};

export default LinkButton;