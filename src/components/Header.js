import Button from "@mui/material/Button";
import style from "styled-components";

const Nav = style.div`
background: rgba(255, 255,255, 0.1);
backdrop-filter: blur( 10px );
--webkit-backdrop-filter: blur(10px);

border-radius: 10px;

display: flex;
font-family: 'Orbitron', sans-serif;
align-items: center;
justify-content: space-between;
padding: 2% 2%;
height: 50px;
color:white;
grid-column: 1/-1;

margin-bottom: 1rem;

box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;

`;
const ContainerBtn = style.div`
display: grid;
grid-template-columns: 1fr 1fr;


`;

function Header(props) {
  return (
    <Nav>
      <h1>LabeX 🚀 </h1>

      <ContainerBtn>
        <div>
          <Button variant="contained" onClick={props.goToListTripsPage}>
            {props.nomeBtn1}
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={props.goToLoginPage}>
            {props.nomeBtn2}
          </Button>
        </div>
      </ContainerBtn>
    </Nav>
  );
}

export default Header;
