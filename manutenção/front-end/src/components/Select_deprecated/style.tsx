import styled, { css} from "styled-components";


interface states{
  isFocused?: boolean,
  isError?: boolean,
  isFill?: boolean,
  Height?: any
  Width?: any
  Main?:boolean
}

export const Content = styled.div<states>`

  text-align: left;
  border: 2px solid #666360;
  position: relative;
  border-radius: 10px;
  height: 42px;
  padding: 3px 10px;
  width: 100%;

  ${ prop => prop.isError && !prop.isFill && css`
    border-color: red;
    svg{
      color: red;
    }
  `}
  
  /* .set{
    display: none;
  } */
  svg{
    margin-right: 10px;
    ${prop => prop.isFocused && css`
      color: #ff9000;
    `}

    ${ prop => prop.isFill && !prop.isError && css`
      color: #ff9000;
    `}    
  }
  ${ prop => prop.isFocused && !prop.isError && css`
    border-color: #ff9000;
  `}

  
  
  .dropdown-selected-value{
    width: 100%;
    height: 30px;
  }

  .dropdown-input{
    padding: 5px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    user-select: none;
    text-transform: uppercase;
    
  }

  .dropdown-menu {
    position: absolute;
    transform: translateY(4px);
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: auto;
    max-height: 150px;
    background-color: #fff;
    z-index: 99;
  }

  .dropdown-item {
    padding: 5px;
    cursor: pointer;
  }

  .dropdown-item:hover {
    background-color: #9fc3f870;
  }

  .dropdown-item.selected {
    background-color: #0d6efd;
    color: #fff;
  }

  .dropdown-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .dropdown-tag-item {
    background-color: #ddd;
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
  }

  .dropdown-tag-close {
    display: flex;
    align-items: center;
  }

  .search-box {
    padding: 5px;
    background-color: #eee;
  }

  .search-box input {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-transform: uppercase;
  }
  .dropdown-tool{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;