import style from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from '@mui/icons-material/Info';

const Content = style.div`
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
width: 60%;
border-radius: 1rem
display:flex;
padding: 2rem;
margin: 2rem 2rem;

background-color:white;
border-radius:1rem;
justify-content: space-between;
color: black;
`;

const ContentBtn = style.div`
display: flex;
justify-content: flex-end;
`


function CardHomeTripsBtn(props) {
  return (
    <Content>
      <div>
        <p>Nome: {props.name}</p>
        <p>Descrição: {props.description}</p>
        <p>Planeta: {props.planet}</p>
        <p>Duração: {props.period}</p>
        <p>Data: {props.date}</p>
      </div>

      <ContentBtn>
      <IconButton aria-label="delete" color="success" onClick={props.viewMore}>
         <InfoIcon/>
        </IconButton>
        <IconButton aria-label="delete" color="error" onClick={props.toDelete}>
          <DeleteIcon />
        </IconButton>
       
      </ContentBtn>

    </Content>
  );
}

export default CardHomeTripsBtn;
