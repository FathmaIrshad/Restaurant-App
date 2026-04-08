import styled from 'styled-components'

export const RestaurantPageContainer = styled.div`
    margin:10px 10px;
    font-family: Arial, sans-serif;

`
export const TabListContainer = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: nowrap;         
    overflow-x: auto;
    &::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }
     &::-webkit-scrollbar-thumb {
        background: #C0C0C0; 
        border-radius: 10px;
    }
`
export const DishContainer = styled.ul`
    margin:10px;
`
