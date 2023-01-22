import styled from "styled-components";

export const ListItem = styled.li`
border-radius: 360px;
background-color:  ${props => props.color ? '#7C8798' : '#262E38'};
list-style-type: none;
width: 51px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    background: #FC7614;
    color: white;
  }
`