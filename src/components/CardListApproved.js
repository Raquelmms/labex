import styled from "styled-components";


const Content = styled.div`
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
width: 60%;
border-radius: 1rem;
display:flex;
flex-direction:column;
padding: 2rem;
margin: 2rem 2rem;

background-color:white;
border-radius:1rem;
`



function CardListApproved(props) {
  return (
    <Content>
   {props.name}
    </Content>
  );
}

export default CardListApproved;
