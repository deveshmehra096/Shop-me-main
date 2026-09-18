import React, { Component } from 'react';
import styled from 'styled-components'

const navLinkComp = ({ className, children, onClick, active }) => (
    <a
      className={className}
      href="#!"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(children);
      }}
      style={active ? { color: '#0f766e', textDecoration: 'underline' } : undefined}
    >
      {children}
    </a>
  );
const NavLink = styled(navLinkComp)`
color: #282C3F;
padding-left:20px;
font-weight:bold;
text-decoration:none;
cursor:pointer;
transition: color 0.15s ease;

&:hover{
  color: #0f766e;
}
`

export default NavLink


