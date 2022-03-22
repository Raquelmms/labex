
import style from "styled-components";

const Nav = style.div`
background: rgba(255, 255,255, 0.1);
backdrop-filter: blur( 10px );
--webkit-backdrop-filter: blur(10px);

border-radius: 10px;
color:white;
display: flex;
font-family: 'Orbitron', sans-serif;
align-items: center;
justify-content: space-between;
padding: 2% 2%;
height: 50px;

grid-column: 1/-1;

margin-bottom: 1rem;
text-shadow: 2px 2px 5px #000000;

box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;

`;
const ContainerBtn = style.div`
display: grid;
grid-template-columns: 1fr 1fr;


`;

function HeaderTextIcon() {
  return (
    <Nav>
      <h1>LabeX 🚀 </h1>

      <ContainerBtn>
       
      </ContainerBtn>
    </Nav>
  );
}

export default HeaderTextIcon;
