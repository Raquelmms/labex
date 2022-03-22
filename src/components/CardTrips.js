import style from "styled-components";

const Content = style.div`
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
width: 60%;
border-radius: 1rem
display:flex;
flex-direction:column;
padding: 2rem;
margin: 2rem 2rem;

background-color:white;
border-radius:1rem;
`



function CardHomeTrips(props) {
  return (
      
    <Content>
     <p>Nome: {props.name}</p>
     <p>Descrição: {props.description}</p>
     <p>Planeta: {props.planet}</p>
     <p>Duração: {props.period}</p>
     <p>Data: {props.date}</p>
    </Content>
    
  );
}

export default CardHomeTrips;
