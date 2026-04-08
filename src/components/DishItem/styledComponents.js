import styled from 'styled-components'

export const DishItemLi = styled.li`
    width:100%;
    height:20%;
    margin:auto;
    border-radius:10px;
    border:2px solid #D1D1D1;
    padding:10px;
    list-style-type:none;
    .dishPicture{
        border-radius:10px;
        margin-left:auto;
        height:20vh;
        width:12vw;

    }
    h3{
        color:#000000;
    }
    h4{
        color:#4F4F4F;
        font-weighht:bold;
    }
    .desc{
        color:#A7A5A5;
        font-size:20px;
    }
    .customizationMsg{
        color:#3B82F6;
        font-size:20px;
    }
    .calorie{
        color:#FFA500;
        font-size:25px;
        font-weight:bold;
        margin-top:30px;
    }
`

export const QuantityButton = styled.p`
    background-color:#338218;
    width:150px;
    border-radius:50px;
    color:white;
    display:flex;
    justify-content: space-between;
    align-items:center;
    button {
        background: transparent;
        border-width: 0px;
        color: white;
        cursor: pointer;
        font-size: 20px;
  }
`
