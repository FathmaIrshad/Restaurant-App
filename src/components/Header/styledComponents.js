import styled from 'styled-components'

export const Heading = styled.h1`
    color:#1A1A1A;
    font-weight:bold;
    font-size:30px;
    margin:0px;
    padding:0px;
`
export const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:10px 20px;
    margin:10px;
    box-shadow:  5px 5px 5px #EDEDED;
    #CartIcon{
        height:50px;
        width:50px;
        color:#585555;
    }
    .orders-title{
        display:none;
    }
    @media (min-width:992px){
        .orders-title{
            display:block;
            font-weight:bold;
            color:#58575C;
            }
    }
`
export const CartListCounter = styled.p`
    padding:10px;
    margin-left:-20px;
    margin-right:30px;
    margin-bottom:70px;
    height:30px;
    border-radius:20px;
    background-color:#FF6347;
    color:white;
    border-width:0px;
    display:flex;
    juustifuy-content:center;
    align-items:center;
`
