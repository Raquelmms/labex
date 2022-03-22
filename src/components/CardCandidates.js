import styled from "styled-components";
import Button from "@mui/material/Button";

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

const ContentBtns = styled.div`
display: flex;
justify-content: center;
column-gap: 2rem;
`

function CardCandidates(props) {
  return (
    <Content>
      <p>Nome: {props.name}</p>
      <p>Idade: {props.age}</p>
      <p>Profissão: {props.profession}</p>
      <p>Texto de Candidatura: {props.applicationText}</p>
      <p>País: {props.country}</p>
      <ContentBtns>
        <Button variant="contained" color="success" onClick={props.decideCandidateApprove}>
          Aprovar
        </Button>
        <Button variant="contained" color="error" onClick={props.decideCandidateReject} >
          Rejeitar
        </Button>
      </ContentBtns>
    </Content>
  );
}

export default CardCandidates;
