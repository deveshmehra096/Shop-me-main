import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const pictureLinkComp = function (props) {
    const handleClick = (e) => {
      e.preventDefault();
      if (props.onClick) props.onClick(props.link);
    };
    return (
    <div>
    <div className={props.className} onClick={handleClick} style={{ cursor: 'pointer' }}>
    <FontAwesomeIcon  icon={props.icon}/>
    </div>

    <a href="#!" onClick={handleClick} className={props.className}>
    {props.link}
    </a>

    </div>
  );
}
const PictureLink = styled(pictureLinkComp)`
text-decoration:none;
display:block;
color:#000;
text-align:center;
padding: 0 10px;

`

export default PictureLink