import style from "styled-components";
import universeImg from "../assets/Preview.svg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CardHome from "../components/CardHome";

const BodyContent = style.div`

-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
overflow: auto;
text-shadow: 2px 2px 5px #000000;

min-height: 100vh;
top:0;
margin: 0;
padding: 0;
color: white;
display:grid;
grid-template-rows: 150px 1fr;
flex-grow: 1;
height: 100%;

`;

const SectionContent = style.div`
display: flex;
justify-content: center;
border-radius: 10px;
`;

function HomePage() {
  const navigate = useNavigate();

  const goToListTripsPage = () => {
    navigate("/trips/list");
  };

  const goToLoginPage = () => {
    navigate("/admin/trips/list");
  };

  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <Header
        goToListTripsPage={goToListTripsPage}
        goToLoginPage={goToLoginPage}
        nomeBtn1={"Ver Viagens"}
        nomeBtn2={"Área de Admin"}
      />

      <SectionContent>
        <CardHome />
      </SectionContent>
    </BodyContent>
  );
}

export default HomePage;
