import styled from 'styled-components';

export const ProjNavContainer = styled.nav`
    width: 100%;
    height: 4vh;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px rgba(0,0,0,0.1);
`

export const Input = styled.div`

    display: flex;
    gap: 10px;
    align-items: center;
    color: rgba(0,0,0,0.7);

    & input{
        border: none;
        font-size: 18px;
    }
    & input:focus{
        outline: none;
    }
    
`

export const ControlsContainer = styled.div`
    display:flex;
    gap: 10px;

    & button{
        all: unset;
        font-size: 18px;
        cursor: pointer;
    }
`