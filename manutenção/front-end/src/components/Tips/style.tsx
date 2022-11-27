import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    
    span {
        width: 250px;
        background: red;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.2s;
        visibility: hidden;

        position: absolute;
        bottom: calc(100% + 6px);
        left: 74%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        color: #312E38;

        &::before {
            content: '';
            border-style: solid;
            border-color: red transparent;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 46%
            
        }
    }

    &:hover span{
        opacity: 1;
        visibility: visible;
    }


`;