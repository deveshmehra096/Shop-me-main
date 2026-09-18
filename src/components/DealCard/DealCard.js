import React from 'react'
import styled from 'styled-components'


function DealCard(props) {
  return (
    <div className={props.className} onClick={() => props.onOpen(props.id)}>
    <img src={props.image} alt={props.message} />
    <div className="card_text">

    <h6>HOT DEALS</h6>
    <h4>{props.message}  </h4>
    <p>+ Shop Now</p>

     </div>
    </div>
  )
}


const DealCardStyled = styled(DealCard)`
position:relative;
width:290px;
height:250px;
margin-top:50px;
overflow:hidden;
cursor:pointer;
background:#ddd;

img{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}

&::before{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.35);
    z-index:1;
}

.card_text {
    position:absolute;
    top:0;
    bottom:0;
    z-index:2;
    color:white;
    padding:20px 20px;
}
.card_text h6{
    text-decoration:underline;
    margin-bottom:20px;
}

.card_text h4{
    margin-bottom:20px;
}

.card_text p{
    font-weight:600;
}
`

export default DealCardStyled
