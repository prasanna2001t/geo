import React from 'react';
import { Link } from 'react-router-dom';

const ToolButtonComponent = ({ name, iconUrl, path }) => (
  <Link to={path} className='tool-button'>
    <i style={{ backgroundImage: `url(${iconUrl})` ,backgroundRepeat:"no-repeat",height:"100px"}}></i>
    <p style={{fontSize:'1.5rem',lineHeight:"50px"}}>{name}</p>
  </Link>
);

export default ToolButtonComponent;
