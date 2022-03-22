import style from "styled-components";
import CardPlanet from "./CardPlanet"

const Container = style.div`
background: rgba(255, 255,255, 0.1);
backdrop-filter: blur( 10px );
--webkit-backdrop-filter: blur(10px);

width: 70%;
display: flex;

border-radius: 10px;

height: 100%;

flex-direction: column;

`;
const ContainerTxt = style.div`
padding: 1rem;


`;



const CardContainer = style.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(4,1fr);

@media(max-width:850px) {
    grid-template-columns: 2fr;
  }


@media(max-width:600px) {
    grid-template-columns: 1fr;
  }
`

function CardHome(props) {
  return (
    <Container>
      <ContainerTxt>
        <h1>A viagem Espacial Perfeita para você</h1>
        <h2>Uma viagem espacial com tempo mínimo e com toda a facilidade.</h2>
      </ContainerTxt>

<CardContainer>

<CardPlanet/>

</CardContainer>
    </Container>
  );
}

export default CardHome;
